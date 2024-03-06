const urlApi = "http://localhost:3000/brands/";
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
        const fila = document.createElement("tr");//creamos la tabla dinamicamente 
        fila.innerHTML = `
            <td>${dato.id}</td>
            <td><img src="${dato.logo}"  style="max-width: 100px; max-height: 100px; width="auto" height="auto"></td>
            <td>${dato.name}</td>
            <td>${dato.local}</td>
            <td>${dato.floor}</td>
            <td>${dato.schedule}</td>
            
            <td><a href="${dato.website}" target="_blank">${dato.website}</a></td>
            <td>${dato.description}</td>
            
            <td>
                <button onclick="editar(${index})" " class="btn btn-sm btn-primary">Editar</button>
                <button onclick="eliminar('${dato.id}')" " class="btn btn-sm btn-danger">Eliminar</button>
                <button onclick="detalle(${index})" " class="btn btn-sm btn-warning">Detalle</button>
            </td>`;
        tbody.appendChild(fila);
    })
    let numMarcas=datos.length;//este dato lo uso para el contador
    localStorage.setItem('numMarcas',numMarcas)//lo guardo en local y lo rescato en el archivo correspondiente
}
cargarDatosDesdeAPI();

document.getElementById('id').value=generateUniqueIdtienda();
let inpuId=document.getElementById('id');
let names = document.getElementById('name');
let local = document.getElementById('local');
let piso= document.getElementById('piso');
let horario = document.getElementById('horario');
let logo = document.getElementById('logo');
let web = document.getElementById('website');
let descripcion = document.getElementById('descripcion');
let btn = document.getElementById('btnCrear')

function generateUniqueIdtienda() {
    return  Math.random().toString(36).substr(1, 4);
  }


function crear() {
    const nuevoDato = {
        id:inpuId.value,
        name: names.value,
        local:local.value,
        floor:piso.value,
        schedule:horario.value,
        logo: logo.value,
        website: web.value,
        description: descripcion.value,
       
       
        
    };
    // URL de la API
    let apiUrl;

    if (!nuevoDato.id) {
        apiUrl = urlApi + `/${nuevoDato.id}`;
    } else {
        apiUrl = urlApi;
    }

    const opcionesSolicitud = {
        method: "POST", //POST para nuevas creaciones
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoDato)
    }
    // Realiza la solicitud
    fetch(apiUrl, opcionesSolicitud)
        .then(response => response.json())
        .then(respuesta => {
            // Maneja la respuesta del servidor 
            console.log("Respuesta del servidor:", respuesta);

            // Después de enviar datos, actualiza la tabla y realiza otras acciones si es necesario
            cargarDatosDesdeAPI();
            limpiarDatos();
        })
        .catch(error => console.error("Error al enviar datos al servidor:", error));

}
btn.addEventListener('click', crear);

function editar(index){
    const datoAEditar = datos[index];
    document.getElementById('id_update').value=datoAEditar.id;
    document.getElementById('name_update').value=datoAEditar.name;
    document.getElementById('local_update').value=datoAEditar.local;
    document.getElementById('piso_update').value=datoAEditar.floor;
    document.getElementById('horario_update').value=datoAEditar.schedule;
    document.getElementById('logo_update').value=datoAEditar.logo;
    document.getElementById('website_update').value=datoAEditar.website;
    document.getElementById('descripcion_update').value=datoAEditar.description;
    $("#modal_update").modal('show')

}

const btnEdit = document.getElementById('btnEditar');

btnEdit.addEventListener('click', function () {

    const nuevoDato = {
        id:document.getElementById('id_update').value,
        name: document.getElementById('name_update').value,
        local:document.getElementById('local_update').value,
        floor:document.getElementById('piso_update').value,
        schedule:document.getElementById('horario_update').value,
        logo: document.getElementById('logo_update').value,
        website: document.getElementById('website_update').value,
        description: document.getElementById('descripcion_update').value,
       
    };
    // URL de la API
    const apiUrl = urlApi + (`${nuevoDato.id}`);
    console.log(apiUrl)

    const opcionesSolicitud = {
        method: "PUT", // Usa PUT para actualizaciones 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoDato)
    }
    // Realiza la solicitud
    fetch(apiUrl, opcionesSolicitud)
        .then(response => response.json())
        .then(respuesta => {
            // Maneja la respuesta del servidor 
            console.log("Respuesta del servidor:", respuesta);

            // Después de enviar datos, actualiza la tabla
            cargarDatosDesdeAPI();
        })
        .catch(error => console.error("Error al enviar datos al servidor:", error));
})

function detalle(index){
    const datoAEditar = datos[index];
    document.getElementById('id_detalle').value=datoAEditar.id;
    document.getElementById('name_detalle').value=datoAEditar.name;
    document.getElementById('local_detalle').value=datoAEditar.local;
    document.getElementById('piso_detalle').value=datoAEditar.floor;
    document.getElementById('horario_detalle').value=datoAEditar.schedule;
    document.getElementById('logo_detalle').value=datoAEditar.logo;
    document.getElementById('website_detalle').value=datoAEditar.website;
    document.getElementById('descripcion_detalle').value=datoAEditar.description;
    $("#modal_detalle").modal('show')

}

function eliminar(id) {
    fetch("http://localhost:3000/brands/" + id, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            console.log('Dato eliminado:', data);
            cargarDatosDesdeAPI();
        })
        .catch(error => console.error('Error al eliminar el dato:', error))

}

cargarDatosDesdeAPI();