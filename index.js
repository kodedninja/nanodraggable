var Component = require('nanocomponent')
var html = require('nanohtml')

function Nanodraggable (x, y) {
  if (!(this instanceof Nanodraggable)) return new Nanodraggable(x, y)
  Component.call(this)

  x = x || 0
  y = y || 0

  this.x = x
  this.y = y

  this.offsetX = 0
  this.offsetY = 0

  this.moving = false
  this.clicked = false
}

Nanodraggable.prototype = Object.create(Component.prototype)

// abstract functions
Nanodraggable.prototype.content = function () {
  return html`No content provided for Nanodraggable`
}
Nanodraggable.prototype.onmousedown = function () {}
Nanodraggable.prototype.onmouseup = function () {}

Nanodraggable.prototype.createElement = function (...args) {
  var t = this
  return html`
    <div
      style="
        position: absolute;
        top: ${this.y}px;
        left: ${this.x}px;
      "
      onmousedown="${down}"
    >
      ${this.content(...args)}
    </div>
  `

  function down (e) {
    e.preventDefault()
    t.clicked = true

    var rect = t.element.getBoundingClientRect()
    t.offsetX = e.clientX - rect.left
    t.offsetY = e.clientY - rect.top

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
    t.onmousedown(e)
  }

  function move (e) {
    e.preventDefault()
    t.moving = true

    if (t.clicked) {
      t.x = e.clientX - t.offsetX
      t.y = e.clientY - t.offsetY

      t.element.style.top = t.y + 'px'
      t.element.style.left = t.x + 'px'
    }
  }

  function up (e) {
    t.moving = false
    t.clicked = false
    document.addEventListener('mouseup', up)
    t.onmouseup(e)
  }
}

module.exports = Nanodraggable
