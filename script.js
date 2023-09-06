document.addEventListener("DOMContentLoaded", () => {

    const endPoint = "https://jsonplaceholder.typicode.com/users";
    const formulario = document.getElementById("formulario");

    //Cuando el formulario se quiere enviar..
    formulario.addEventListener("submit", (x) => {
        //Evita que el formulario se envíe por defecto
        x.preventDefault();
        //Ubicamos el los nodos del dom que contienen la información
        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const nacimiento = document.getElementById("nacimiento");
        //Creamos un objeto js con la información
        const datos = {
            nombre: nombre.value,
            apellido: apellido.value,
            nacimiento: nacimiento.value,
        };
        //Convertimos el objeto js a un JSON
        const datosJSON = JSON.stringify(datos);
        //Realizamos la petioción fetch al endPoint
        fetch(endPoint, {
            //Ajustamos la configuración de la petición.
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //esto indica que el cuerop de la solicitud contiene datos en formato JSON
            },
            body: datosJSON //le damos como cuerpo el json del objeto js
        })
            .then(response => response.json()) //resivimos la respuesta y la convertimos a un json para trabajar con ella en los siguientes thens
            .then(data => {
                console.log('Respuesta recibida del servidor:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            })

    })
})