// ao clicar no botão abrir janela executa alteraDiv

const openModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')


openModal.onclick = function() {
    modalWrapper
    .classList
    .remove('invisible')
}

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})