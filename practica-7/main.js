const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ];

 productos.forEach((item)=> {
    console.log(item);
    
 });

let prductosDisponibles = productos.map((productos)=> productos.nombre)

console.log(prductosDisponibles);
console.log(prductosDisponibles.includes("Silla Gamer"));


let descuento = productos.map((productos)=> productos.precio * 0.9)
console.log(descuento);

const precio100 = productos.filter(producto => producto.precio < 100);
console.log(precio100);

let arrayNuevo = productos.slice(0, 2);
console.log(arrayNuevo);

 productos.sort((a, b) => a.precio - b.precio);
 console.log(productos);
 
let reverso = [...productos].reverse();
console.log(reverso);
