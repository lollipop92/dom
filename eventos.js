// Eventos

// mouse
function print() {
    console.log('print')
}

// teclado
const input = document.querySelector('input')

input.onkeypress = function() {
    console.log('rodei')
}


//listener 

const h1 = document.querySelector('h1')

h1.addEventListener('dblclick', print2)

function print2() {
    console.log('print2')
}

// argumento event

const input2 = document.querySelector('input')

input2.onkeydown = function(event) {
    console.log(event.key)
}