let nuevoArray = ["kevin", "pablo", "johan", "geraldine", "gabriel"];

console.log(nuevoArray[3]);
nuevoArray[0] = "jeffer"

/* ------------- */
nuevoArray.push("jeff")

nuevoArray.unshift("benjamin", "douglas")

/* ------------------------ */
let ultimoEstudiante = nuevoArray.pop();

let primerEstudiante = nuevoArray.shift();

let largo = nuevoArray.length;

console.log(nuevoArray);
/* --------------------------------- */

/* for (let index = 0; index < nuevoArray.length; index++) {
    console.log(nuevoArray[index]); 
}

let notas = [32, 100, 25, 78].reduce(function (a, b) {
    return a % b
})
console.log(notas)


let notas2 = [32, 100, 10, 8, 0]
let notas3 = [32]
let notas4 = [32, 77]

for (let index = 0; index < notas.length; index++) {
    
} */

function promedio(arrayNotas) {
    let resultado = 0
    for (let i = 0; i < arrayNotas.length; i++) {
        resultado = resultado + arrayNotas[i]
    }
    return resultado / arrayNotas.length;
}

let matriz = [
    [28, 39, 90, 89],
    [70, 32, 28, 18],
    [10, 0, 15, 31],
    [11, 23, 45, 67],
];
/* practicar la diagonal secundaria */

let estudiante = {
    nombre: "kevin",
    edad: 28,
    nacionalidad: "boliviana",
    esMiembro: true,
    numeroCuenta: 25477656262738876n
}

let listaEstudiantes = [
  {
    nombre: "kevin",
    edad: 28,
    nacionalidad: "Bolivia",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [11, 23, 45, 67],
  },
  {
    nombre: "Pablo",
    edad: 33,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 12322876454n,
    notas: [99, 80, 100, 10],
  },
  {
    nombre: "Yamila",
    edad: 22,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 112894789123479812n,
    notas: [77, 99, 51, 80],
  },
  {
    nombre: "Sebastian",
    edad: 25,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [0, 10, 0, 100],
  },
  {
    nombre: "jeff",
    edad: 34,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [100, 90, 99, 88],
  },
];
/* objetivo mostrar a los estudiantes cuyo promedio sea mayor a 65pts */

for (let index = 0; index < listaEstudiantes.length; index++) {
  let promedioEstudiante = promedio(listaEstudiantes[index].notas);
  if (promedioEstudiante >= 65) {
    console.log(
      listaEstudiantes[index].nombre +
        " este estudiante tiene un promedio de " +
        promedioEstudiante
    );
  }
}

/* mostrar a todos los estudiantes q sean de Argentina */

/* for (let index = 0; index < listaEstudiantes.length; index++) {
  ;let nacionalidad = listaEstudiantes[index].nacionalidad{"argentina"};
  console.log(listaEstudiantes)
  
} */
