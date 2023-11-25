# PureDOM

PureDOM is a JavaScript library crafted for seamless DOM manipulation, free from the constraints of frameworks or external libraries. With PureDOM, you can effortlessly create and manipulate HTML elements in a straightforward and efficient manner. This library focuses on simplicity and flexibility, allowing you to perform common DOM operations quickly and without complications.

## Key Features

- 🌐 Easy creation of HTML elements.
- 🛠️ DOM manipulation without external dependencies.
- 📚 Emphasis on code clarity and simplicity.

## Example Usage

```javascript
// Create a div element with class "my-class" and content "Hello, World!"
const myElement = PureDOM.createElement('div', { class: 'my-class' }, 'Hello, World!');

// Get the document body
const body = document.body;

// Append the created element to the body
PureDOM.appendTo(myElement, body);
