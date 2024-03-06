const urlApi = "http://localhost:3000/admins/";
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


function inicializarTabla(){
    tbody.innerHTML=" ";
    //
    //
    datos.forEach((dato,index)=>{
        const fila=document.createElement('tr')
        fila.innerHTML=`
        <td>${dato.id}</td>
        <td>${dato.name}</td>
        <td>${dato.email}</td>


        <td>
                <button onclick="editar(${index})" " class="btn btn-sm btn-primary" >Editar</button>
                <button onclick="eliminar('${dato.id}')"" class="btn btn-sm btn-danger"  >Eliminar</button>
                <button onclick="detalle(${dato.Description})"" class="btn btn-sm btn-warning" >Detalle</button>
        </td> `
        tbody.appendChild(fila)
    })
    let numAdmin=datos.length;
localStorage.setItem('numadmi',numAdmin)

}

cargarDatosDesdeAPI();
function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 4);
  }

  function generateUniquePassword() {
    return Math.random().toString(36).substr(2, 6);
  }
document.getElementById('id').value=generateUniqueId();
let id=document.getElementById('id');
let names=document.getElementById('name')
let email=document.getElementById('email')
document.getElementById('password').value=generateUniquePassword();
let password=document.getElementById('password');
let btn=document.getElementById('btnCrear')

function CrearAdmin(){
    const nuevosDatos={
        id:id.value,
        name:names.value,
        email:email.value,
        password:password.value

    };
     // URL de la API
     let apiUrl;

     if (!nuevosDatos.id) {
         apiUrl = urlApi + `/${nuevosDatos.id}`;
     } else {
         apiUrl = urlApi;
     }

     const opcionesSolicitud = {
        method: "POST", //POST para nuevas creaciones
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevosDatos)
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
btn.addEventListener('click',CrearAdmin)


function editar(index){
  const datoAEditar = datos[index];

    document.getElementById('id_update').value=datoAEditar.id;
    document.getElementById('name_update').value=datoAEditar.name;
    document.getElementById('email_update').value=datoAEditar.email;
    document.getElementById('password_update').value=datoAEditar.password;

    $("#modalUpdate").modal('show')
    
}
const btnEditar = document.getElementById('btnActualizar')

btnEditar.addEventListener('click', function () {

    const datosEditados = {
        id: document.getElementById('id_update').value,
        name: document.getElementById('name_update').value,
        email: document.getElementById('email_update').value,
        password: document.getElementById('password_update').value
    }
     // URL de la API
     const apiUrl = urlApi + (`${datosEditados.id}`);
     console.log(apiUrl)
 
     const opcionesSolicitud = {
         method: "PUT", // Usa PUT para actualizaciones 
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(datosEditados)
     }
     // Realiza la solicitud
     fetch(apiUrl, opcionesSolicitud)
         .then(response => response.json())
         .then(respuesta => {
             // Maneja la respuesta del servidor (puede ser necesario dependiendo de tu implementación)
             console.log("Respuesta del servidor:", respuesta);
 
             // Después de enviar datos, actualiza la tabla y realiza otras acciones si es necesario
             cargarDatosDesdeAPI();
         })
         .catch(error => console.error("Error al enviar datos al servidor:", error));
})
function limpiarDatos(){
    document.getElementById('id').value="";
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('password').value="";

}
function eliminar(id) {
    fetch("http://localhost:3000/admins/" + id, {
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