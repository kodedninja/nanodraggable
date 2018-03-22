var Nanocomponent = require('nanocomponent')
var html = require('nanohtml')

function Nanodraggable (x, y, content) {
	if (!(this instanceof Nanodraggable)) return new Nanodraggable(x, y, content)
	Nanocomponent.call(this)

	this.x = x
	this.y = y

	this.content = content

	this.offset_x = 0
	this.offset_y = 0

	this.moving = false
	this.clicked = false
}

Nanodraggable.prototype = Object.create(Nanocomponent.prototype)

Nanodraggable.prototype.createElement = function () {
	var t = this
	return html`
		<div
			style="
				position: absolute;
				top: ${this.y - this.offset_y}px;
				left: ${this.x - this.offset_x}px;
			"
			onmousedown="${down}" onmouseup="${up}"
		>
			${this.content()}
		</div>
	`

	function down(e) {
		e.preventDefault()
		t.clicked = true

		var rect = t.element.getBoundingClientRect()
		t.offset_x = e.clientX - rect.left
		t.offset_y = e.clientY - rect.top

		document.addEventListener('mousemove', move)
	}

	function move(e) {
		e.preventDefault()
		t.moving = true

		if (t.clicked) {
			t.x = e.clientX
			t.y = e.clientY
			t.rerender()
		}
	}

	function up(e) {
		t.moving = false
		t.clicked = false
	}
}

module.exports = Nanodraggable
