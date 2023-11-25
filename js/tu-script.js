// Ejemplo de uso de la librería

// Crear un elemento div con clase "mi-clase" y contenido "Hola, Mundo!"
const miElemento = MiLibreriaDOM.createElement('div', { class: 'mi-clase' }, 'Hola, Mundo!');

// Obtener el body del documento
const body = document.body;

// Agregar el elemento creado al body
MiLibreriaDOM.appendTo(miElemento, body);
