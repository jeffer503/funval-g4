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