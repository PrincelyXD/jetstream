import "./css/TextSlider.css";
import { useState } from "react";
function TextSlider() {
  const [pos, setPos] = useState(0);

  let prevScrollPos = window.scrollY;
  function pushDwn() {
    setPos((prevNum) => prevNum - 4);
  }

  function pullUp() {
    setPos((prevNum) => {
      return prevNum + 4;
    });
  }

  window.onscroll = () => {
    let currScrollPos = window.scrollY;

    if (prevScrollPos > currScrollPos) {
      pullUp();
    } else {
      pushDwn();
    }
   
  };

  return (
    <div className="TextSlider">
      <div className="slide" style={{ transform: `translateX(${pos}px)` }}>
        <div className="carousel">
          <h3>Seamless integration</h3>
          <h2>»</h2>
          <h3>Coustomized Solutions</h3>
          <h2>»</h2>
          <h3>Scalability for growth</h3>
          <h2>»</h2>
          <h3>Reliable 24/7 support</h3>
          <h2>»</h2>
        </div>
        <div className="carousel">
          <h3>Seamless integration</h3>
          <h2>»</h2>
          <h3>Coustomized Solutions</h3>
          <h2>»</h2>
          <h3>Scalability for growth</h3>
          <h2>»</h2>
          <h3>Reliable 24/7 support</h3>
          <h2>»</h2>
        </div>
        <div className="carousel">
          <h3>Seamless integration</h3>
          <h2>»</h2>
          <h3>Coustomized Solutions</h3>
          <h2>»</h2>
          <h3>Scalability for growth</h3>
          <h2>»</h2>
          <h3>Reliable 24/7 support</h3>
          <h2>»</h2>
        </div>
      </div>
    </div>
  );
}

export default TextSlider;
