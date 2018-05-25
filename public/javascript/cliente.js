var visitas = JSON.parse(localStorage.getItem('visitas'));
var cantidad;

function actualizarVisitas() {
    document.querySelector('.visitas').innerHTML = visitas.length;
}


if (visitas == null) {
    visitas = [];
    cantidad = 0;
}
cantidad = visitas.length;
visitas.push(cantidad++);
actualizarVisitas();


localStorage.setItem('visitas', JSON.stringify(visitas));