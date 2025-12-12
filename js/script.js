
var submit= $("#btn-submit")
submit.click(function(){
alert("Te has registrado correctamnete");
})

function toggleMenu() {
    const navMenu = document.querySelector('.nav_menu');
    const hamburger = document.getElementById('hamburger');

    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
        hamburger.classList.remove('open');
    } else {
        navMenu.style.display = "flex";
        hamburger.classList.add('open');
    }
}

// MODAL
function openModal() {
  console.log("Función openModal");
  var modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "flex";

  return false;
}
function closeModal() {
  console.log("Función closeModal")
  var modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
  
}   



// CHARTJS
const ctx = document.getElementById('miGrafico');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
            label: 'Turistas (Nº Personas)',
            data: [1200, 1900, 3000, 500, 2800, 3200],
            backgroundColor: '#4e73df',
            borderColor: '#2e59d9',
            borderWidth: 2,
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 500
                },
                grid: {
                    color: '#ccc'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});


// // Esperar a que la página cargue completamente
// document.addEventListener('DOMContentLoaded', function() {
//     const ctx = document.getElementById('miGrafico').getContext('2d');  // Obtener el contexto del canvas
    
//     // Crear el gráfico
//     const miGrafico = new Chart(ctx, {
//         type: 'bar',  // Tipo de gráfico: 'bar' para barras
//         data: {
//             labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],  // Etiquetas para el eje X
//             datasets: [{
//                 label: 'Turistas (Nº Personas)',  // Etiqueta para el dataset
//                 data: [1200, 1900, 3000, 500, 2800, 3200],  // Datos para cada mes
//                 backgroundColor: '#4e73df',  // Color de fondo para las barras
//                 borderColor: '#2e59d9',  // Color de borde de las barras
//                 borderWidth: 1  // Grosor del borde de las barras
//             }]
//         },
//         options: {
//             responsive: true,  // Hace que el gráfico sea responsive
//             scales: {
//                 y: {
//                     beginAtZero: true,  // Comienza el eje Y desde 0
//                     ticks: {
//                         stepSize: 500  // Paso de las marcas en el eje Y
//                     }
//                 },
//                 x: {
//                     grid: {
//                         display: false  // Oculta la línea de la cuadrícula en el eje X
//                     }
//                 }
//             }
//         }
//     });
// });
