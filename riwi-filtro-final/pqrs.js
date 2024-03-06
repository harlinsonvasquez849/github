const urlApi = "http://localhost:3000/PQR/";//se almacena url en una constante
let datos = [];


function cargarDatosDesdeAPI() {//este es el get para tranformar los datos 
    fetch(urlApi)
        .then(response => response.json())
        .then(data => {
            // Almacena los datos cargados desde la API
            datos = data; // Asumiendo que la respuesta de la API es un array
          
        })
        .catch(error => console.error("Error al cargar datos desde la API:", error));
}


document.getElementById('id').value=generateUniqueId();//a este id le asignamos el resultado de la funcion para generar un id aleatorio
let inpuId=document.getElementById('id');//a la variable le asignamos lo que tiene el id
let tipo = document.getElementById('option').value;
let email = document.getElementById('email');
let mensaje= document.getElementById('mensaje');
let btn = document.getElementById('btnEnviar')

function generateUniqueId() {
    return  Math.random().toString(36).substr(1, 4);
  }


function crear() {
    const nuevoDato = {
        id:inpuId.value,
        tipo:tipo,
        email:email.value,
        mensaje:mensaje.value,
        
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
           
        })
        .catch(error => console.error("Error al enviar datos al servidor:", error));

}
btn.addEventListener('click', crear);

cargarDatosDesdeAPI();
