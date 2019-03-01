var html = require('nanohtml')
var Nanodraggable = require('..')

class Component extends Nanodraggable {
  constructor () {
    super(0, 0)
  }

  content (text) {
    return html`<div>${text}</div>`
  }

  onmousedown () {
    console.log(`nanodraggable: mouse down (${this.offsetX}, ${this.offsetY})`)
  }

  onmouseup () {
    console.log('nanodraggable: mouse up')
  }
}

var c = new Component()

module.exports = () => html`${c.render('Drag me')}`
