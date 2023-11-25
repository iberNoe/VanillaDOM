// Definir un objeto para tu librería
const MiLibreriaDOM = {
    // Función para crear elementos HTML
    createElement: function (tagName, attributes = {}, content = "") {
        const element = document.createElement(tagName);

        // Añadir atributos al elemento
        for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                element.setAttribute(key, attributes[key]);
            }
        }

        // Añadir contenido al elemento
        element.innerHTML = content;

        return element;
    },

    // Función para agregar un elemento al DOM
    appendTo: function (element, target) {
        target.appendChild(element);
    },

    // Otras funciones que desees agregar...
};
