/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "Un delfín con esmoquin",
  "Morgan Freeman",
  "Dory",
  "Un pingüino de Madagascar",
  "Un unicornio"
];
let action = [
  "accidentalmente se tragó a",
  "hizo una voltereta sobre",
  "destruyó a",
  "abofeteó con su cola a",
  "atacó con un cuerno de unicornio a"
];
let what = [
  "mi router de Wi-Fi",
  "mis ganas de vivir",
  "mi autoestima",
  "Donald Trump",
  "mi última neurona funcional"
];
let when = [
  "mientras invocaba delfines",
  "justo cuando estaba descubriendo el sentido de la vida",
  "durante una escena épica en cámara lenta con arcoíris",
  "mientras hablaba con un gato sobre física cuántica",
  "justo antes de que el universo colapsara"
];

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a); // Incluye el último número
}

function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max); // Asegúrate de que incluya el último elemento
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
