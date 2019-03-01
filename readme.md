# nanodraggable
Draggable nanocomponent

## installation
```
npm i -S nanodraggable
```

## example
```javascript
var Nanodraggable = require('nanodraggable')
var html = require('choo/html')

class DraggableObject extends Nanodraggable {
  constructor(x, y) {
    super(x, y)
  }

  content(text) {
    return html`<div>${text}</div>`
  }
}

var draggable = new DraggableObject(0, 0)

function view (state, emit) {
  return html`
    <div>
      ${draggable.render('Drag me')}
    </div>
  `
}
```

## api
#### ```draggable = Draggable(x, y)```
Creates a new component. Takes ```x``` and ```y``` as default position.

#### `draggable.content(...args)`
An abstract function to override that returns the content of the draggable component. The arguments from the `render` function are forwarded to this.

#### ```draggable.onmousedown(event)```
An optional abstract function to override. Called on `mousedown`.

#### ```draggable.onmouseup(event)```
An optional abstract function to override. Called on `mouseup`.
