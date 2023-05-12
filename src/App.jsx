import { useEffect, useState, useRef } from 'react';
import { ReactDOM } from 'react-dom';

function App() {

  let tl = gsap.timeline({ delay: 0.5 });

  const [shapes, setShapes]  = useState([]);

  return (
    <div className='main-wrapper'>
      <div className='full-size text'>
        <h1>WOW</h1>
        <h1>HOW</h1>
        <h1>DO</h1>
        <h1>THESE</h1>
        <h1>SHAPES</h1>
        <h1>MORPH?</h1>
      </div>
      <div className="shapes-wrapper">
        {shapes}
      </div>
      <div className="full-size outline" >
        <h1>WOW</h1>
        <h1>HOW</h1>
        <h1>DO</h1>
        <h1>THESE</h1>
        <h1>SHAPES</h1>
        <h1>MORPH?</h1>
      </div>
    </div>
  )
}

// const width = window.innerWidth;
// const height = window.innerHeight;

// const min = 0;
// const max = width;

// function degreeToRadian(deg) {
//   return deg * (Math.PI / 180);
// }

// function clamp(number) {
//   return Math.max(min, Math.min(number, max));
// }

// function random(factor) {
//   return clamp(Math.floor(Math.random() * factor));
// }

// useEffect(() => {
//   let x1 = width / 2;
//   let x2 = width;
//   let y1 = height / 2;
//   let y2 = height;

//   let r1 = 0;
//   let r2 = 50;


//   let deg1 = random(width);
//   let deg2 = random(width);

//   let xi1 = width / 2;
//   let xi2 = width / 2;

//   let yi1 = height / 2.5;
//   let yi2 = height / 2;


//   const size = height / 5;

//   let s = Snap("#svg");

//   if(document.getElementById("svg").children.length < 4){
//     console.log(document.getElementById("svg").children);
//     var circle1 = s.circle(x1, y1, size);
//     var circle2 = s.circle(x2, y2, size / 1.5);

//     shapes.push(circle1);
//     shapes.push(circle2);
//   } else {
//     return
//   }

//   circle1.attr({ fill: "#C595FF" });
//   circle2.attr({ fill: "#B06EFF" });

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
export default App
