var choo = require('choo')
var html = require('choo/html')

var Nanodraggable = require('..')

var draggable = Nanodraggable(0, 0, function() {
	return html`
		<div style="
			padding: 20px;
			background: #0000ff;
			color: #fff;
			cursor: pointer;"
		>
			<span>Drag me</span>
		</div>
	`
})

var app = choo()

app.route('*', main)

app.mount('body')

function main (state, emit) {
	return html`
		<body>
			${draggable.render()}
		</body>
	`
}
