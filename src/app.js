/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro", "Pedro"];
let action = ["se comió", "orinó", "aplastó", "rompió"];
let what = ["mi tarea", "mi teléfono", "el coche"];
let when = [
  "antes de la clase",
  "cuando estaba durmiendo",
  "mientras estaba haciendo ejercicio",
  "durante mi almuerzo",
  "mientras estaba rezando"
];

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  console;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}
window.onload = function() {
  console.log("Hello Rigo from the console!");

  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
