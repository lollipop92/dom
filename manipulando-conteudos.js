// Manipulando conteúdo 
// textContent

const element = document.querySelector('h1')
element.textContent += " - Olá Devs! "

console.log(element.textContent)

// innerText

const element1 = document.querySelector('h1')
element1.innerText = " - innerText!"
console.log(element1.textContent)

// innerHTML

const element2 = document.querySelector('h1')
element1.innerHTML = " innerHTML <small>!!!</small>"
console.log(element2.textContent)

// value

const element4 = document.querySelector('input')
element4.value = "Valor que eu quiser"

// atributos 

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID)

