// Preparació del canvas ----------------------
/* Obté una referència a <canvas>, després crida al mètode getContext()
  per definir un context al el que es pot començar a dibuisar
  (ctx) és un objecte que representa l'àrea de dibuix del 
  <canvas> y permet dibuixar elements 2D al damunt.

  width and height són dreceres a l'ample i alt del canvas  que coincideixen
  amb l'alt i ample del navegador (viewport)
*/
import { Pilota } from './pelotas.js';

const pilotes = [];
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// funció per generar un número aleatori entre dues xifres

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// funció per generar un color aleatori

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

    if (pilotes.length < 25) {
        let mida = random(10, 20);
        let pilota = new Pilota(
            random(mida, width - mida),
            random(mida, height - mida),
            random(-7, 7),
            random(-7, 7),
            randomRGB(),
            mida
        );
        pilotes.push(pilota);
    }

    for (let pilota of pilotes) {
        pilota.dibuixa(ctx);
        pilota.mou(width, height);
    }

    requestAnimationFrame(loop);
}

loop();
