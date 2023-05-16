import { useEffect, useState, useRef } from 'react';
import { ReactDOM } from 'react-dom';
import Snap from 'snapsvg-cjs';



// Neccessary variables
let animation_time = 500;
let animation_type = mina.backin;
let s = null;
let g = null;
var circle = { d: "M150,150m-150,0a150,150 0 1,0 300,0a150,150 0 1,0 -300,0" };
var square = { d: "M300,300H0V0H300V300Z" };
var polygon = { d: "M300,150l-75,150H75L0,150,75,0H225l75,150Z" };
var octagon = { d: "M300,87.87v124.26l-87.87,87.87H87.87L0,212.13V87.87L87.87,0h124.26l87.87,87.87Z" };
var double_triangle = { d: "M225,150l75,150H0L75,150,0,0H300l-75,150Z" };
var triangle = { d: "M300,300H0L150,0l150,300Z" };

function App() {
  console.log("App refreshed");
  var shapes = [];

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

  function random_coordinate(border) {
    return Math.floor(Math.random() * border);
  }

  useEffect(() => {
    if (s = null) {
      return;
    }

    s = Snap("#shapes_wrapper");
    s.clear();

    var s1 = s.path({ d: "M150,150m-150,0a150,150 0 1,0 300,0a150,150 0 1,0 -300,0", fill: '#A771FE' });
    s1.transform(`translate(t${random_coordinate(width - 100)}, ${random_coordinate(height - 100)})`);
    shapes.push(s1);

    var s2 = s.path({ d: "M150,150m-150,0a150,150 0 1,0 300,0a150,150 0 1,0 -300,0", fill: '#782FEF' });
    s2.transform(`translate(t${random_coordinate(width - 100)}, ${random_coordinate(height - 100)})`);
    shapes.push(s2);


  function animateShapeMovement(shape, x, y, speed, deg) {
    
    
    shape.transform(`translate(t${x} ${y})`);

    requestAnimationFrame(animateShapeMovement.bind(null, shape, x, y, speed, deg));
  }

  animateShapeMovement(s1, s1.getBBox().cx, s1.getBBox().cy, 0.01, 0);

  }, []);

  function currentShape(currentShape){
    console.log("Current shape ", currentShape)
      for(let i = 0; i <  shapes.length; i++){
        if (currentShape == "CIRCLE") {
          animateToCircle(shapes[i]);
        }
        if (currentShape == "RECTANGLE") {
          animateToSquare(shapes[i]);
        }
        if (currentShape == "TRIANGLE") {
          animateToTriangle(shapes[i]);
        }
        if (currentShape == "DOUBLETRIANGLE") {
          animateToDoubleTriangle(shapes[i]);
    
        }
        if (currentShape == "POLYGON") {
          animateToPolygon(shapes[i]);
    
        }
        if (currentShape == "OCTAGON") {
          animateToOctagon(shapes[i]);
        }
      }
  }

  function animateToSquare(shape) {
    shape.animate(square, animation_time, animation_type);
  }

  function animateToCircle(shape) {
    shape.animate(circle, animation_time, animation_type);
  }

  function animateToPolygon(shape) {
    shape.animate(polygon, animation_time, animation_type);
  }

  function animateToTriangle(shape) {
    shape.animate(triangle, animation_time, animation_type);
  }

  function animateToDoubleTriangle(shape) {
    shape.animate(double_triangle, animation_time, animation_type);
  }

  function animateToOctagon(shape) {
    shape.animate(octagon, animation_time, animation_type);
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
      <svg className="shapes-wrapper" id="shapes_wrapper">
      </svg >
      <div className="full-size outline" >
        <h1 onMouseOver={() => currentShape("CIRCLE")}>CIRCLE</h1>
        <h1 onMouseOver={() => currentShape("RECTANGLE")}>SQUARE</h1>
        <h1 onMouseOver={() => currentShape("POLYGON")}>POLYGON</h1>
        <h1 onMouseOver={() => currentShape("TRIANGLE")}>TRIANGLE</h1>
        <h1 onMouseOver={() => currentShape("DOUBLETRIANGLE")}>DOUBLE TRIANGLE</h1>
        <h1 onMouseOver={() => currentShape("OCTAGON")}>OCTAGON</h1>
      </div>
    </div>
  )
}
export default App





  