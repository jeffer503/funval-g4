/* function duplicar(numero) {
    numero = numero * 2
    return numero
}
console.log(duplicar(9));

function despedida() {
    let chau = "hasta luego"
    return chau;
}
let despedida1 = despedida(); 
console.log(despedida1);

function saludo2(nombre) {
    console.log("hola " + nombre + " como estas?")
}
saludo2("jefferson");

function saludar() {
    console.log("hola mundo")
}
saludar(); */

/* let cantidad = parseInt(prompt("Ingresa un numero"));
let numero = 2
let contador = 0

function esPrimo(numero) {
    if(numero <= 1) return false;
    if(numero === 2) return true;
    if(numero % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(numero); i += 2) {

    }
} */


/* function guardar(nombreProducto, pecio, cantidad) {
    if(pedido[nombreProducto]) {
        pedido[nombreProducto].cantidad += cantidad;
    }else {
        pedido[nombreProducto] = {
            precio: precio,
            cantidad: cantidad
        };
    }
    console.log(pedido agregado: ${cantidad}  ${nombreProducto} ($${precio} c/u));
    
}

function calcularTotal() {
  let total = 0;
  for (const producto in pedido) {
    const datos = pedido[producto];
    total += datos.precio * datos.cantidad;
  }
  return total;
} */

/* let duplicar = (x) => x * 2;

console.log(duplicar(15)); */



let numero = parseFloat(prompt("ingresa un numero"))
let numero2 = parseFloat(prompt("ingresa otro numero"))

let multiplicar = (a, b) => a * b;

let sumar = (a,b) => a + b;

let restar = (a, b) => a - b;

let dividir = (a, b) => a / b;

