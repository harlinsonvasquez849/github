/*const boton=document.getElementById("miBoton");

const tieneArgumentos=boton.hasAttributes();
console.log(tieneArgumentos)

const tieneDataNumber=boton.hasAttribute("data-number")
console.log(tieneDataNumber)

const tieneDisabled=boton.hasAttribute("disabled")
console.log(tieneDisabled)
// js

document.addEventListener("DOMContentLoaded", function () {
    const modoNocturnoBtn = document.getElementById("modoNocturnoBtn");
  
    modoNocturnoBtn.addEventListener("click", function () {
      const tieneModoNocturno = document.body.hasAttribute("modo-nocturno");
      document.body.toggleAttribute("modo-nocturno");
  
      // Cambiar el texto del botón y aplicar estilos según el estado
      if (tieneModoNocturno) {
        modoNocturnoBtn.textContent = "Activar Modo Nocturno";
      } else {
        modoNocturnoBtn.textContent = "Desactivar Modo Nocturno";
      }
    });
  });*/

  function agregarEstudiante() {
    const nombre = document.getElementById('nombre').value;
    const materia = document.getElementById('materias').value;
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value);
    
    const promedio = (nota1 + nota2 + nota3) / 3;
    const estadoNota = promedio >= 3 ? 'aprobada' : 'reprobada';
  
    const tabla = document.getElementById('cuerpoTabla');
    const fila = tabla.insertRow();
  
    const celdaNombre = fila.insertCell();
    const celdaMateria = fila.insertCell();
    const celdaNota1 = fila.insertCell();
    const celdaNota2 = fila.insertCell();
    const celdaNota3 = fila.insertCell();
    const celdaPromedio = fila.insertCell();
  
    celdaNombre.textContent = nombre;
    celdaMateria.textContent = materia;
    celdaNota1.textContent = nota1;
    celdaNota2.textContent = nota2;
    celdaNota3.textContent = nota3;
    celdaPromedio.textContent = promedio.toFixed(2);
  
    celdaPromedio.setAttribute('estado', estadoNota);
  }
  
  