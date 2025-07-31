/* function operacion(a, b, callback) {
    return callback(a, b);
}

console.log(
    operacion(2, 4, (a, b) => {
        return a + b;
    })
);

let notas = [12, 23, 5, 34, 87, 24, 23, 32, 77];

notas.forEach((nota)=>{
    console.log(nota);
    
})

let copia = notas.map((nota) => nota * 2); */

/* ---------sincronia------------------ */
/* console.log("Levantarme");
console.log("cepillar mis dientes");
console.log("desayunar");
console.log("estudiar"); */

/* ---------asincronia------------------ */

/* console.log("despertar");

setTimeout(() => {
    console.log("preparar desayuno");
}, 3000);

console.log("cepillar mis dientes");

setTimeout(() => {
    console.log("desayunar");
}, 4000);

setTimeout(() => {
    console.log("estudiar");
}, 5000); */

/* ------ejercicio--------- */

/* let estudiantes = [
  {
    nombre: "Yamila",
    edad: 21,
    notas: [34, 77, 45, 78],
  },
  {
    nombre: "Gabriel",
    edad: 24,
    notas: [90, 44, 55, 9],
  },
  {
    nombre: "Jefferson",
    edad: 18,
    notas: [100, 10, 0, 100],
  },
  {
    nombre: "Pablo",
    edad: 33,
    notas: [31, 22, 45, 78],
  },
];

const listaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = false;
    if (cumplido) {
      resolve(estudiantes);
    } else {
      reject("el servidor esta caido");
    }
  }, 5000);
});

async function estudiantes2() {
  try {
    let estudiantesAprob = await listaEstudiantes;
    console.log(estudiantesAprob);
  } catch (err) {
    console.log("no se puede obtener los datos");
  }
}

estudiantes2();

for (let i = 0; i < estudiantes.length; i++) {

} */
async function obtenerDatos() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!respuesta.ok) {
      throw new Error('Error en la respuesta');
    }
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error('Error al conectar con la API:', error);
  }
}

obtenerDatos();
