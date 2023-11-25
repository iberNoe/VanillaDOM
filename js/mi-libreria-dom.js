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
    import { addStyles } from './styles';  // Ajusta la ruta según la estructura de tus archivos

const MiLibreriaDOM = {
    createElement: (tagName, attributes = {}, content = "") => {
        const element = document.createElement(tagName);
        for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                element.setAttribute(key, attributes[key]);
            }
        }
        element.innerHTML = content;
        return element;
    },

    appendTo: (element, target) => {
        target.appendChild(element);
    },

    addStyles,  // Importa y agrega la función addStyles de styles.js

    // Otras funciones que desees agregar...
};

export default MiLibreriaDOM;

};
