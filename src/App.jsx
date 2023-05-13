import { useEffect, useState, useRef } from 'react';
import { ReactDOM } from 'react-dom';
import Shape from './components/Shape';

function App() {

  const [currentShape, setcurrentShape] = useState("CIRCLE");

  const width = window.innerWidth;
  const height = window.innerHeight;

  const min = 0;
  const max = width;

  function degreeToRadian(deg) {
    return deg * (Math.PI / 180);
  }

  function clamp(number) {
    return Math.max(min, Math.min(number, max));
  }

  function random(factor) {
    return clamp(Math.floor(Math.random() * factor));
  }

  useEffect(()=>{
    let shapes = document.getElementById("shapes_wrapper").children;
    for(let i = 0; i < document.getElementById("shapes_wrapper").children.length; i++){
      movementAnimation(shapes[i]);
    }
  },[])

  function movementAnimation(shape){
    // Create a random movement animation
    var x = random(width);
    var y = random(height);
    shape.style.transform = "translate(" + x + "px, " + y + "px)";
  }

  return (
    <div className='main-wrapper'>
      <div className='full-size text'>
        <h1>CIRCLE</h1>
        <h1>SQUARE</h1>
        <h1>POLYGON</h1>
        <h1>TRIANGLE</h1>
        <h1>DOUBLE TRIANGLE</h1>
        <h1>OCTAGON</h1>
      </div>
      <div className="shapes-wrapper" id="shapes_wrapper">
        <Shape key="1" shape={currentShape} />
        <Shape key="2" shape={currentShape} />
        <Shape key="3" shape={currentShape} />
        <Shape key="4" shape={currentShape} />
      </div>
      <div className="full-size outline" >
        <h1 onMouseOver={() => setcurrentShape("CIRCLE")}>CIRCLE</h1>
        <h1 onMouseOver={() => setcurrentShape("RECTANGLE")}>SQUARE</h1>
        <h1 onMouseOver={() => setcurrentShape("POLYGON")}>POLYGON</h1>
        <h1 onMouseOver={() => setcurrentShape("TRIANGLE")}>TRIANGLE</h1>
        <h1 onMouseOver={() => setcurrentShape("DOUBLETRIANGLE")}>DOUBLE TRIANGLE</h1>
        <h1 onMouseOver={() => setcurrentShape("OCTAGON")}>OCTAGON</h1>
      </div>
    </div>
  )
}
export default App





// useEffect(() => {
//   function animate_cricle() {
//     if (x1 <= 0 || x1 >= width || y1 <= 0 || y1 >= height) {
//       xi1 = x1 > width / 2 ? x1 - 1 : x1 + 1;
//       yi1 = y1 > height / 2 ? y1 - 1 : y1 + 1;

//       x1 = 0;
//       y1 = 0;
//       deg1 = (deg1 + 90) % 360;
//       console.log(deg1);
//       r1 = 0;
//     }
//     if (x2 <= 0 || x2 >= width || y2 <= 0 || y2 >= height) {
//       xi2 = x2 > width / 2 ? x2 - 1 : x2 + 1;
//       yi2 = y2 > height / 2 ? y2 - 1 : y2 + 1;

//       x2 = 0;
//       y2 = 0;
//       deg2 = (deg2 + 90) % 360;
//       r2 = 2;
//     }

//     x1 = xi1 + r1 * Math.cos(degreeToRadian(deg1));
//     y1 = yi1 + r1 * Math.cos(degreeToRadian(deg1));
//     r1 = r1 + 1;
//     circle1.attr({ cx: x1, cy: y1 });

//     x2 = xi2 + r2 * Math.cos(degreeToRadian(deg2));
//     x1 = x1;
//     y2 = yi2 + r2 * Math.cos(degreeToRadian(deg2));
//     y2 = y2;
//     r2 = r2 + 2;
//     circle2.attr({ cx: x2, cy: y2 });

//     requestAnimationFrame(animate_cricle);
//   }
//   animate_cricle();
// }, [])
