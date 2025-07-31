let contenedor = document.querySelector("#pokemons-container");

async function traerpokemones(numeroInicialPokemones) {
  contenedor.innerHTML = "";
  for (let i = numeroInicialPokemones; i < numeroInicialPokemones + 10; i++) {
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let data = await respuesta.json();
    console.log(data);
    renderizarPokemon(data);
  }
}
traerpokemones(1);
function renderizarPokemon({
  sprites: {
    other: {
      ["official-artwork"]: { front_default },
    },
  },
  name,
  id,
  types,
}) {
  let tipos = "";
  types.forEach((tipo) => {
    tipos = tipos + " " + tipo.type.name;
  });

  contenedor.innerHTML += `
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="${front_default}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">#00${id}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">tipos ${tipos}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Mas informacion
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
`;
}

let next = document.querySelector("#siguiente");
let contador = 1;
next.addEventListener("click", function (e) {
  contador += 10;
  traerpokemones(contador);
});

let ant = document.querySelector("#anterior");

ant.addEventListener("click", function (e) {
  if (contador > 10) {
    contador -= 10;
    traerpokemones(contador);
  }
});

let menu = document.querySelector("#drpwn");
let opc = document.querySelector("#opciones");
menu.addEventListener("click", function (e) {
  opc.classList.toggle("hidden");
});