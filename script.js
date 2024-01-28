var datosJSON = []
var tabla = document.getElementById("tabla");

const apiBase = "http://127.0.0.1:8001"

function obtenerTodos(){
    const url = new URL(apiBase + "/obtener_todos").toString()
    fetch(url)
    .then(response => response.json())
    .then(data => {
        datosJSON = data
        actualizarTabla()
    })
    .catch(error => console.log(error))

}

function actualizarTabla(){
    datosJSON.forEach(function (persona){
        var fila = tabla.insertRow();
        var celdaIdentificacion = fila.insertCell(0);
        var celdaNombre = fila.insertCell(1);
        var celdaEdad = fila.insertCell(2)
        var celdaSexo = fila.insertCell(3);
        var celdaPulsaciones = fila.insertCell(4)

        celdaIdentificacion.textContent = persona.identificacion
        celdaNombre.textContent = persona.nombre
        celdaEdad.textContent = persona.edad
        celdaSexo.textContent = persona.sexo
        celdaPulsaciones.textContent = persona.sexo == "Masculino" ? (220 - persona.edad) : (226 - persona.edad);
        

    })
}


// Hombres: 220 - edad, Mujeres: 226 - edad
  
//var resultado = condicion ? verdadero : falso;

document.addEventListener('load', obtenerTodos())