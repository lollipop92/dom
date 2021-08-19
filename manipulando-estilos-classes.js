// Manipulando estilos e classes
// alterando estilos

const element5 = document.querySelector('body')

//element5.style.backgroundColor = "#f9f3D2"
console.log(element5.style.backgroundColor)

//classList
const element6 = document.querySelector('body')

element6.classList.add('active', 'green')
console.log(element6.classList)
element6.classList.remove('active')
element6.classList.toggle('active') //funciona como um interruptor
