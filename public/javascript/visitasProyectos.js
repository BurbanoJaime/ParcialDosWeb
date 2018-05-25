var visitasProyectos = JSON.parse(localStorage.getItem('visitasProyectos'));
var cantidad;

function actualizarVisitas() {
    document.querySelector('.visitas').innerHTML = visitasProyectos.length;
}


if (visitasProyectos == null) {
    visitasProyectos = [];
    cantidad = 0;
}
cantidad = visitasProyectos.length;
visitasProyectos.push(cantidad++);
actualizarVisitas();


localStorage.setItem('visitasIndex', JSON.stringify(visitasProyectos));