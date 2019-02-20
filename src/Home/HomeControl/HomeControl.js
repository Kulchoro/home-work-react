import React from "react";
import "./hControls.css";
function Control(props) {
  return (
    <div className="Controls">
      <input
        type="color"
        value={props.color1}
        onChange={event => props.changeColor1(event.target.value)}
      />
      <input
        type="color"
        value={props.color2}
        onChange={event => props.changeColor2(event.target.value)}
      />
      <input
        type="color"
        value={props.color3}
        onChange={event => props.changeColor3(event.target.value)}
      />
      <input
        type="color"
        value={props.color4}
        onChange={event => props.changeColor4(event.target.value)}
      />
      <input
        type="color"
        value={props.color5}
        onChange={event => props.changeColor5(event.target.value)}
      />
      <input
        type="color"
        value={props.color6}
        onChange={event => props.changeColor6(event.target.value)}
      />
      <input
        type="color"
        value={props.color7}
        onChange={event => props.changeColor7(event.target.value)}
      />
      <input
        type="color"
        value={props.color8}
        onChange={event => props.changeColor8(event.target.value)}
      />
    </div>
  );
}

export default Control;
