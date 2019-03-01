var html = require('nanohtml')
var Nanodraggable = require('..')

class Component extends Nanodraggable {
	constructor() {
		super(0, 0)
	}

	content() {
		return html`<div>Drag me</div>`
	}
}

var c = new Component()

module.exports = () => html`${c.render()}`
