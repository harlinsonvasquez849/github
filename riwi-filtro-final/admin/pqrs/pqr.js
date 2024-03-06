const urlApi = "http://localhost:3000/PQR/";
let datos = [];
let tbody = document.getElementById('tbody')

function cargarDatosDesdeAPI() {//este es el get para tranformar los datos 
    fetch(urlApi)
        .then(response => response.json())
        .then(data => {
            // Almacena los datos cargados desde la API
            datos = data; // Asumiendo que la respuesta de la API es un array
            inicializarTabla();
        })
        .catch(error => console.error("Error al cargar datos desde la API:", error));
}

function inicializarTabla() {
    tbody.innerHTML = "";

    datos.forEach((dato, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${dato.id}</td>
            <td>${dato.tipo}</td>
            <td>${dato.email}</td>
            <td>${dato.mensaje}</td>
            
            
            <td>
                
                <button onclick="eliminar('${dato.id}')" " class="btn btn-sm btn-danger">Eliminar</button>
                
            </td>`;
        tbody.appendChild(fila);
    })
    let numPqr=datos.length;
    localStorage.setItem('numPqr',numPqr)
}

function eliminar(id) {
    fetch("http://localhost:3000/PQR/" + id, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            console.log('Dato eliminado:', data);
            cargarDatosDesdeAPI();
        })
        .catch(error => console.error('Error al eliminar el dato:', error))

}
cargarDatosDesdeAPI()