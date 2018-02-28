// import preact
import { h, render, Component } from 'preact';

function cube(x) {
	console.log("This is calling from the JS", x * x);
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

export { cube, foo };
