let estudiantes = [
  {
    nombre: "kevin",
    pais: "Bolivia",
  },
  {
    nombre: "Pablo",
    pais: "Argentina",
  },
  {
    nombre: "Geraldine",
    pais: "Peru",
  },
  {
    nombre: "Gabriel",
    pais: "Argentina",
  },
  {
    nombre: "Mario",
    pais: "Argentina",
  },
];

/* let estudiantesArgentina = estudiantes.filter(est => est.pais === "Argentina");

let contenedor = document.querySelector("#contenedor-estudiantes");
for (let i = 0; i < estudiantesArgentina.length; i++) {
  contenedor.innerHTML += `
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantesArgentina[i].nombre}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Pais de origen: ${estudiantesArgentina[i].pais}</p>
            </a>
            `;
} */


 let tabla = document.querySelector("#tabla");           

const productos = [
  { id: 1, nombre: "Helado de vainilla", precio: 10, stock: 3 },
  { id: 2, nombre: "Helado de chocolate", precio: 12, stock: 0 },
  { id: 3, nombre: "Helado de fresa", precio: 11, stock: 2 },
  { id: 4, nombre: "Helado de limón", precio: 9, stock: 1 },
];

for (let i = 0; i < productos.length; i++) {
    tabla.innerHTML += `

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    id
                </th>
                <th scope="col" class="px-6 py-3">
                    nombre
                </th>
                <th scope="col" class="px-6 py-3">
                    Precio
                </th>
                <th scope="col" class="px-6 py-3">
                    Stock disponible
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${productos[i].id}
                </th>
                <td class="px-6 py-4">
                    ${productos[i].nombre}
                </td>
                <td class="px-6 py-4">
                    ${productos[i].precio}
                </td>
                <td class="px-6 py-4">
                    ${productos[i].stock}
                </td>
            </tr>
        </tbody>
    </table>
</div>
`
    
}