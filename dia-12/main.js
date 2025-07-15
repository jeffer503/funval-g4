let edad = 18;

/* if(edad>=18){
    console.log("eres mayor de edad")
}else{
    console.log("no eres mayor de edad")   
} */

/* let permisoMama = false;
let permisoPapa = true;
if (edad >= 18) && (permisoMama || permisoPapa) {
    console.log("puedo salir a bailar");
} else {
  console.log("me quedo en casa");
} */

/* let dia = 10
let mes = 6
let año = 1990
let diaHoy = 15
 */

//while

/* let n = 0

while (n < 5) {
    console.log("hola mundo")
    n++;
}
console.log("flujo normal")

//do while
let nombreUsuario;
do {
    nombreUsuario = prompt("Ingresa tu nombre de usuario")
} while (nombreUsuario !== "admin");
console.log("lograste ingresar al sistema");

//for

for (let i = 0; i <= 10; i++) {
    console.log(i);
} */

let cantidad = parseInt(prompt("Ingresa un numero"));
let contador = 0;
let numero = 2;

while (contador < cantidad) {
  let esPrimo = true;

  for (let i = 2; i < Math.sqrt(numero); i++) {
    if(numero % i === 0) {
        esPrimo = false;
        break;
    }
  }
  if(esPrimo) {
    console.log(numero);
    contador++;
  }
  numero++;
}
