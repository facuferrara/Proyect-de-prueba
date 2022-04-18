const lista = document.getElementById('lista');
const btnAgregar = document.getElementById('btn-agregar');

lista.childNodes.forEach((elemento) => {elemento.addEventListener('click', (e) => {
    console.log(e);
})})
btnAgregar.addEventListener('click', () => {
    const elemento =` 
        <a href="#">
            Elemento <i class="bi bi-check-square-fill"></i>
        </a>
        `;  
    lista.innerHTML += elemento;
}); 