document.addEventListener("DOMContentLoaded", function () {//evento para asegurarnos que todo el html carge y que el codigo no trate de acceder a elementos que aun no estan disponibles
    let apiTiendas = "http://localhost:3000/brands";
    let datos = [];
    let row = document.getElementById('row');
    let container = document.getElementById('container');
    let searchInput = document.getElementById("searchInput");//id de buscar

    searchInput.addEventListener("input", filtrarPorNombre);//evento input y la funcion encargada

    function cargarDatos() {
        fetch(apiTiendas)
            .then(response => response.json())
            .then(data => {
                datos = data;
                cargarIndex();
            })
            .catch(error => console.error("Error al cargar los datos", error));
    }

    function limpiarVista() {
        container.innerHTML = '';
        row.innerHTML = '';
    }

    function cargarIndex(tiendas = datos) {
        tiendas.forEach((dato) => {
            let col = document.createElement("div");
            col.classList.add("col-md-3");
            row.appendChild(col);

            let card = document.createElement("div");
            card.classList.add('card', 'mb-4');
            col.appendChild(card);

            let img = document.createElement("img");
            img.classList.add("img-fluid");
            img.setAttribute("src", dato.logo);
            card.appendChild(img);

            let cardbody = document.createElement("div");
            cardbody.classList.add("card-body");
            card.appendChild(cardbody);

            let h2 = document.createElement("h2");
            h2.innerText = dato.name;
            cardbody.appendChild(h2);

            let p = document.createElement("p");
            p.innerText = dato.description;
            cardbody.appendChild(p);

            let button = document.createElement("button");
            button.classList.add('btn', 'btn-danger', 'w-100', 'mt-4');
            button.style.backgroundColor = "blue";
            button.style.border = "none";
            button.innerText = "detalle";
            cardbody.appendChild(button);
        });

        container.appendChild(row);
    }

    function filtrarPorNombre() {//funcion para realizar la busqueda 
        let term = searchInput.value.toLowerCase();//almacenamos lo que se ingresa por input 
        let tiendasFiltradas = datos.filter(dato => dato.name.toLowerCase().includes(term));

        limpiarVista();
        cargarIndex(tiendasFiltradas);
    }

    cargarDatos();
});


