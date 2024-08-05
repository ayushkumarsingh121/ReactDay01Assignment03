// wrap you jsx code into React figment Paragraph Element: Include a paragraph (

// ) element with the text “React is a javascript library”.

// Div Element with Class main:

// This div should have the class name main. It should contain: A paragraph (

// ) element with the text “Click the below button to alert 'Hello'”. A button element with the text “Alert Hello”. Button Functionality:

// Clicking the button should trigger an alert with the message “Hello”. Additional Challenges (Optional) Styling: Apply inline styles to the div element to enhance its appearance. Submission Guidelines Ensure your code is well-commented to describe your logic. Test your component to make sure it works as expected. Submit your html file. Include a brief document explaining your component's functionality and any challenges you faced.

let root = ReactDOM.createRoot(document.getElementById("root"));

let message = () => {
  alert("Hello");
};

let element = (
  <>
    <p>React is a javascript library</p>
  </>
);

let myDiv = (
  <div className="main">
    <p>Click the below button to alert 'Hello'</p>
    <button onClick={message}>Alert Hello</button>
  </div>
);

let myFragment = (
  <>
    {element} {myDiv}
  </>
);
root.render(myFragment);
