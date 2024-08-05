# ReactDay01Assignment03


# React Day 01 Assignment 03

## Overview

This project demonstrates the basics of using React and JSX to create a simple user interface with interactive elements.

## Files

- `index.html`: The HTML file that includes React, ReactDOM, and Babel libraries, and sets up the root element for rendering the React component.
- `index.js`: The JavaScript file that contains the React component and JSX code.

## Functionality

### Components

- **Message Function**: A function that triggers an alert with the message "Hello" when called.
- **Element Component**: A JSX fragment containing a paragraph with the text "React is a javascript library".
- **MyDiv Component**: A JSX div element with the class `main` that includes:
  - A paragraph instructing the user to click the button.
  - A button that, when clicked, calls the `message` function to show an alert with the message "Hello".
- **MyFragment Component**: A JSX fragment that combines the `element` and `myDiv` components.

### Rendering

The `root.render(myFragment)` function renders the combined components into the root DOM element.

## Conclusion

This simple project illustrates how to use React and JSX to create and render components, handle events, and structure a basic React application.

