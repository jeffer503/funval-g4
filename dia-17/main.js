/* let boton = document.querySelector("#btn");

let fionaImagen = document.querySelector("#fiona");

boton.addEventListener("click", (event) => {
    if (event.target.classList.contains("bg-green-800")) {
    event.target.classList.remove("bg-green-800");
    event.target.classList.add("bg-red-800");
    boton.textContent = "dia";
    fionaImagen.src = "https://upload.wikimedia.org/wikipedia/commons/d/d3/Russian_cosplay_fiona_shrek.jpg";
  } else {
    event.target.classList.add("bg-green-800");
    event.target.classList.remove("bg-red-800");
    boton.textContent = "noche";
    fionaImagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0pGCS2R3xfiTJO3cMQq0b5HxmGvflqSh9Q&s";
  }
}); */

/* let form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let obj = {};
}) */
/* --------------------------------------------------------- */

let contador = 0;
let anterior = "";
let opcionColor = document.querySelector("#selectorColor");

opcionColor.addEventListener("change", function (e) {
  let parrafo = document.querySelector("#colorTexto");
  if (contador === 0) {
    parrafo.classList.add(`text-${e.target.value}-700`);
    anterior = `text-${e.target.value}-700`;
    contador++;
  } else {
    parrafo.classList.replace(anterior, `text-${e.target.value}-700`);
    anterior = `text-${e.target.value}-700`;
    contador++;
  }
});