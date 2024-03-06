let Tabla = document.getElementById("Tabla");
let table = document.createElement("table")
table.classList.add("table-hover");
Tabla.appendChild(table);
let control = false;

let Clasificaciones = ["ID","NOMBRE","CORREO", "ACCIONES"];
let ClasificacionesRow = document.createElement("tr");
// ClasificacionesRow.style.backgroundColor = "rgba(0,0,0,0.4)";

Clasificaciones.forEach(Clasificaciones => {
    let th = document.createElement("th");
    th.textContent = Clasificaciones;
    ClasificacionesRow.appendChild(th);
});
table.appendChild(ClasificacionesRow);

let i=1;
let resultados = fetch("https://memin.io/public/api/users")
.then(response => {
    return response.json()
}).then(data => {
    data.forEach(function(element){  
        let fila = document.createElement("tr");

        let IDtabla = document.createElement("td");
        IDtabla.setAttribute("id", "DatoID");
        IDtabla.textContent = element.id;
        fila.appendChild(IDtabla);

        let NombreTabla = document.createElement("td");
        NombreTabla.textContent = element.name;
        fila.appendChild(NombreTabla);

        let CorreoTabla = document.createElement("td");
        CorreoTabla.textContent = element.email;
        fila.appendChild(CorreoTabla);

        //Celda botones
        let Botones = document.createElement("td");

        fila.appendChild(Botones);
        
        let Eliminar = document.createElement("button");
        Eliminar.classList.add("btn", "btn-danger");
        Eliminar.innerText = "Eliminar"
        Eliminar.setAttribute("onclick", "EliminarDato(" + i + ")");
        Botones.appendChild(Eliminar);

        let VerDetalles = document.createElement("button");
        VerDetalles.classList.add("btn", "btn-primary");
        VerDetalles.innerText = "Ver detalles";
        VerDetalles.setAttribute("onclick", "VerDetallesDatos(" + i + ")");
        Botones.appendChild(VerDetalles);
        
        let Actualizar = document.createElement("button");
        Actualizar.classList.add("btn", "btn-secondary");
        Actualizar.innerText = "Editar";
        Actualizar.setAttribute("onclick", "ConsultarDatos(" + i + ")");
        Botones.appendChild(Actualizar);
        
        table.appendChild(fila);
        i++;
    })  
})

// ELIMINAR DATOS
function EliminarDato(index) {
    let celda = table.rows[index].cells[0];
    console.log(typeof celda.textContent)
    fetch(`https://memin.io/public/api/users/${celda.textContent}`,{
        method: `DELETE`,
        headers: {
            "Content-Type": "application/json"
        }
        
    })
        .then(response => {
        window.location.reload();
        return response.json()
    });
}

// VER DETALLES DEL DATO
function VerDetallesDatos(index){
    let celda = table.rows[index].cells[0];
    fetch(`https://memin.io/public/api/users/${celda.textContent}`)
    .then(response => {
        return response.json()
    }).then(data => {
        console.log(data.remember_token);
        let Modal = document.getElementById("Modal");
        let modalbody = document.getElementById("Modal_Body");
        let btnCerrar = document.getElementById("btnClose");
        Modal.style.display = "block";

        modalbody.innerHTML = `
        <b><p>id:</b> ${data.id}</p>
        <b><p>Name:</b> ${data.name}</p>
        <b><p>Email:</b> ${data.email}</p>
        <b><p>Email verified:</b> ${data.email_verified_at}</p>
        <b><p>Remember token:</b> ${data.remember_token}</p>
        <b><p>Create at:</b> ${data.created_at}</p>
        <b><p>updated at:</b> ${data.updated_at}</p>`;

        btnCerrar.onclick = function () {
        Modal.style.display = "none";
        };
    })
}

// ACTUALIZAR DATOS
//   Funcion para el botón de actualizar
function ConsultarDatos(index) {
    // Traer el id de los inputs
    let formNombre = document.getElementById("Nombre");
    let formCorreo = document.getElementById("Correo");
    let formId = document.getElementById("idActualizar");
    
    // Variebles con el contenido de las celdas de la tablas
    let celda0 = table.rows[index].cells[0];
    console.log(celda0.textContent)
    let celda1 = table.rows[index].cells[1];
    console.log(celda1.textContent)
    let celda2 = table.rows[index].cells[2];
    console.log(celda2.textContent)

    // Pasar el valor de las celdas a los inputs
    formId.value = celda0.textContent;
    formNombre.value = celda1.textContent;
    formCorreo.value = celda2.textContent;
    console.log()
    control = true;

} 

//  Funcion para el botón que agrega los cambios
function ActualizarRegistro(){
    let formNombre = document.getElementById("Nombre");
    let formCorreo = document.getElementById("Correo");
    let formId = document.getElementById("idActualizar");
    let contenidoID = formId.value;

    datos_nuevos={
        name: formNombre.value,
        email:formCorreo.value,
    }
    

    if (control) {
        fetch(`https://memin.io/public/api/users/${contenidoID}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos_nuevos)
    })
    .then(response => {
        return response.json()
    }).then(data => {
        console.log(data);
        window.location.reload();
    });
    } else {
            fetch(`https://memin.io/public/api/users`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos_nuevos)
    })
    .then(response => {
        return response.json()
    }).then(data => {
        console.log(data);
        window.location.reload();
    });
    }
    
    

    // Poner el valor del input en el objeto
    // datos_nuevos.id =contenidoID;
    // datos_nuevos.email = formCorreo.value
    // datos_nuevos.name = formNombre.value
    // fetch(`https://memin.io/public/api/users/${contenidoID}`,{
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(datos_nuevos)
    // })
    // .then(response => {
    //     return response.json()
    // }).then(data => {
    //     console.log(data);
    //     window.location.reload();
    // });
/*     let resultado2 = resultados + (datos_nuevos.id ? `/${datos_nuevos.id}` : "");
    let opcionesSolicitud = {
        method: datos_nuevos.id ? "PUT" : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos_nuevos)
    };
    fetch(resultado2, opcionesSolicitud)
        .then(response => response.json())
        .then(dato => {
        window.location.reload();
    }) */
}


let Buscador = document.getElementById("Buscador");
Buscador.addEventListener(`keyup`, e =>{
    fetch(`https://memin.io/public/api/v2/users/search/${e.target.value}`,{
        method: `GET`,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
        return response.json()
    }).then(data =>{
        console.log(data)
        
    })
});




