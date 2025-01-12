document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".formulario__form");
    const productosGrid = document.querySelector(".productos__grid");
    const botonLimpiar = document.querySelector(".formulario__boton--limpiar");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.querySelector("#nombre").value;
        const precio = document.querySelector("#precio").value;
        const imagen = document.querySelector("#imagen").value;

        // Crear una nueva tarjeta de producto
        const nuevaTarjeta = document.createElement("div");
        nuevaTarjeta.classList.add("producto");

        nuevaTarjeta.innerHTML = `
            <img src="${imagen}" alt="${nombre}" class="producto__imagen">
            <h3 class="producto__nombre">${nombre}</h3>
            <p class="producto__precio">$${parseFloat(precio).toFixed(2)}</p>
            <button class="producto__boton-eliminar">🗑 Eliminar</button>
        `;

        // Agregar funcionalidad al botón eliminar
        const botonEliminar = nuevaTarjeta.querySelector(".producto__boton-eliminar");
        botonEliminar.addEventListener("click", () => {
            productosGrid.removeChild(nuevaTarjeta);
        });

        // Agregar la nueva tarjeta a la sección productos__grid
        productosGrid.appendChild(nuevaTarjeta);
    });

    botonLimpiar.addEventListener("click", () => {
        // Limpiar los campos del formulario
        formulario.reset();
    });
});
