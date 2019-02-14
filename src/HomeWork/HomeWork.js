import React from "react";

function Home() {
  let eat = "";
  return (
    <div className="Home">
      <input type="text" onChange={event => (eat = event.target.value)} />
      <button
        onClick={() => {
          alert("You have eaten");
        }}
      >
        Eat
      </button>
    </div>
  );
}

export default Home;
