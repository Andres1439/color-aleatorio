// Seleccionar los elementos del DOM

const d = document;

const boton = d.querySelector("button");
const color = d.getElementById("color");

function generarColorHexAleatorio() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }
  return colorHex;
}

boton.addEventListener("click", function (e) {
  let colorAleatorio = generarColorHexAleatorio();
  color.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
});
