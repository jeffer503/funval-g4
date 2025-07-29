let saldo = 0;
let continuar = true;
let historial = [];

function ingresarDinero(cantidad) {
  if (cantidad > 0) {
    saldo += cantidad;
    registrarTransaccion("Ingreso", cantidad);
    console.log(`Depósito exitoso. Nuevo saldo: $${saldo}`);
  } else {
    console.log("La cantidad a ingresar debe ser mayor que 0.");
  }
}

function retirarDinero(cantidad) {
  if (cantidad > saldo) {
    console.log("Saldo insuficiente.");
  } else if (cantidad <= 0) {
    console.log("La cantidad a retirar debe ser mayor que 0.");
  } else {
    saldo -= cantidad;
    registrarTransaccion("Retiro", cantidad);
    console.log(`Retiro exitoso. Nuevo saldo: $${saldo}`);
  }
}

function consultarSaldo() {
  console.log(`Saldo actual: $${saldo}`);
}

function registrarTransaccion(tipo, cantidad) {
  historial.push({
    tipo: tipo,
    cantidad: cantidad,
    fecha: new Date().toLocaleString()
  });
}

function mostrarHistorial() {
  if (historial.length === 0) {
    console.log("No hay transacciones registradas.");
  } else {
    console.log("Historial de transacciones:");
    historial.forEach((trans, index) => {
      console.log(`${index + 1}. ${trans.tipo} de $${trans.cantidad} el ${trans.fecha}`);
    });
  }
}

function iniciarSimulacion() {
  while (continuar) {
    let opcion = prompt(
      "¿Qué desea hacer?\n1. Ingresar dinero\n2. Retirar dinero\n3. Consultar saldo\n4. Salir\n5. Ver historial"
    );

    switch (opcion) {
      case "1":
        let ingreso = parseFloat(prompt("Ingrese la cantidad a depositar:"));
        ingresarDinero(ingreso);
        break;

      case "2":
        let retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
        retirarDinero(retiro);
        break;

      case "3":
        consultarSaldo();
        break;

      case "4":
        continuar = false;
        console.log("Gracias por usar la cuenta bancaria.");
        break;

      case "5":
        mostrarHistorial();
        break;

      default:
        console.log("Opción no válida. Intente de nuevo.");
    }
  }
}

iniciarSimulacion();

