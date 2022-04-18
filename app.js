const lista = document.getElementById('lista');
const btnAgregar = document.getElementById('btn-agregar');

// de la siguiente forma los elementos hijos no va a ejecutar el evento
lista.addEventListener('click', (e) => {
    console.log(e.target.tagname)
    if (e.target && e.target.tagname === 'A'){ /*elemento el cual quiero ejecutar*/
        e.target.classList.toggle('activo');
    }
})

btnAgregar.addEventListener('click', () => {    
    const elemento = ` 
        <a href="#">
            Elemento <i class="bi bi-check-square-fill"></i>
        </a>
        `;  
    lista.innerHTML += elemento;
    // agregarListeners(); esto esta mal ya que si pongo un evento al contenedor, los hijos tamb lo van a realizar.


}); 




// forma fea------
// const agregarListeners = () => {
//     lista.childNodes.forEach((elemento) => {
//         elemento.addEventListener('click', (e) => {
//             e.target.classList.toggle('activo'); 
//         });
//     });
// }
