import React from "react";

function EventExample(event) {
  const youClicked = function youCliked() {
    alert("You clicked2!");
  };
  let title = "Hello world!";
  let text = "";
  return (
    <div className="EventExample">
      <h1>{title}</h1>
      <button onClick={() => alert("You clicked")}>Click me!</button>
      <button onClick={youClicked}>Click me 2!</button>
      <input
        type="text"
        value={title}
        onChange={event => {
          console.log(event.target.value);
        }}
      />
      <input
        type="text"
        onChange={event => {
          console.log("My name is" + event.target.value);
        }}
      />
      <input type="text" onChange={event => (text = event.target.value)} />
      <button onClick={event => alert(text)}>Enter</button>
    </div>
  );
}

export default EventExample;
