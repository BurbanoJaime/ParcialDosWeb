var visitasIndex = JSON.parse(localStorage.getItem('visitasIndex'));
var cantidad;

function actualizarVisitas() {
    document.querySelector('.visitas').innerHTML = visitasIndex.length;
}


if (visitasIndex == null) {
    visitasIndex = [];
    cantidad = 0;
}
cantidad = visitasIndex.length;
visitasIndex.push(cantidad++);
actualizarVisitas();


localStorage.setItem('visitasIndex', JSON.stringify(visitasIndex));