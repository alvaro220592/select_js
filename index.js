function buscar(elemento){
    let divs_maes = document.querySelectorAll('.mae')
    
    for (let mae of divs_maes) {
        let div_filha = mae.querySelector('.filha')

        if (!div_filha.innerText.toLowerCase().includes(elemento.value)) {
            mae.classList.add('d-none')
        } else {
            mae.classList.remove('d-none')
        }
    }
}

function marcar (elemento) {
    elemento.classList.toggle('selected')
}

function marcarTudo () {
    let filhas = document.querySelectorAll('.filha')
    for (let filha of filhas) {
        if (!filha.parentElement.classList.contains('d-none')) {
            filha.classList.add('selected')
        }
    }
}

function desmarcarTudo () {
    let filhas = document.querySelectorAll('.filha')
    for (let filha of filhas) {
        filha.classList.remove('selected')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#buscar').focus()
})