import React, { useEffect, useState } from "react";
import Snap from "snapsvg-cjs";

// Shapes paths
var shape = "";
var circle = {d: "M300,150c0,82.84-67.16,150-150,150S0,232.84,0,150,67.16,0,150,0s150,67.16,150,150Z"};
var square = { d: "M300,300H0V0H300V300Z" };
var polygon = {d: "M300,150l-75,150H75L0,150,75,0H225l75,150Z"};
var octagon = {d: "M300,87.87v124.26l-87.87,87.87H87.87L0,212.13V87.87L87.87,0h124.26l87.87,87.87Z"};
var double_triangle = {d: "M225,150l75,150H0L75,150,0,0H300l-75,150Z"};
var triangle = {d: "M300,300H0L150,0l150,300Z"};

export default function Shape(props) {
    useEffect(() => {
        var s = Snap("#shape");
        shape = s.path({
            fill: 'white',
            d: circle.d
        });
    }, [])

    function animateToSquare() {
        shape.animate(square, 200, mina.easeinout);
    }

    function animateToCircle() {
        shape.animate(circle, 200, mina.easeinout);
    }

    function animateToPolygon() {
        shape.animate(polygon, 200, mina.easeinout);
    }

    function animateToTriangle() {
        shape.animate(triangle, 200, mina.easeinout);
    }

    function animateToDoubleTriangle() {
        shape.animate(double_triangle, 200, mina.easeinout);
    }

    function animateToOctagon() {
        shape.animate(octagon, 200, mina.easeinout);
    }

    return (
        <svg className="shape" id="shape"></svg>
    )
}
