import React, { useEffect, useState } from "react";
import Snap from "snapsvg-cjs";

var shape = "";
var shape1 = "";

export default function Shape(props) {
    useEffect(() => {
        var s = Snap("#shape");
        shape = s.path({
            fill: 'white',
            stroke: '#5f5fda',
            strokeWidth: '5',
            d: "M 60 40 H 110 V 110 H 10 L 10 10"
        });

        shape1 = { d: "M 40 40 H 110 V 110 H 10 L 10 10" };

    }, [])

    function animateToShapeOne() {
        shape.animate(shape1, 1000, mina.elastic);
    }

    return (
        <svg className="shape" id="shape" onClick={animateToShapeOne}></svg>
    )
}