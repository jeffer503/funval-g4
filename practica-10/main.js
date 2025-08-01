async function obtenerDatos() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!respuesta.ok) {
      throw new Error('Error en la respuesta');
    }
    const datos = await respuesta.json();
    const contenedor = document.querySelector("#contenedor");
    datos.forEach(usuario => {
      contenedor.innerHTML += `<div class="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h3 class="text-xl font-semibold mb-2">Nombre: ${usuario.name} Doe</h3>
        <p class="text-gray-700"><span class="font-medium">Usuario:</span>${usuario.username}</p>
        <p class="text-gray-700"><span class="font-medium">Email:</span> ${usuario.email}</p>
        <p class="text-gray-700"><span class="font-medium">Empresa:</span> ${usuario.company.name}</p>
    </div>`
    });

    
  } catch (error) {
    console.log("Error al conectar con la API");
  }
}

obtenerDatos();

