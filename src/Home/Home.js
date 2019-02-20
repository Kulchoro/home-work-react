import React from "react";
import "./Home.css";
import HomeControl from "./HomeControl/HomeControl";
function Home(props) {
  const style = {
    background: `linear-gradient(90deg, ${props.color1} 0%, ${
      props.color2
    } 15%, ${props.color3} 25%, ${props.color4} 35%, ${props.color5} 45%, ${
      props.color6
    } 55%, ${props.color7} 75%, ${props.color8} 100%)`
  };

  return (
    <div className="Home" style={style}>
      <HomeControl
        color1={props.color1}
        color2={props.color2}
        color3={props.color3}
        color4={props.color4}
        color5={props.color5}
        color6={props.color6}
        color7={props.color7}
        color8={props.color8}
        changeColor1={props.changeColor1}
        changeColor2={props.changeColor2}
        changeColor3={props.changeColor3}
        changeColor4={props.changeColor4}
        changeColor5={props.changeColor5}
        changeColor6={props.changeColor6}
        changeColor7={props.changeColor7}
        changeColor8={props.changeColor8}
      />
    </div>
  );
}

export default Home;
