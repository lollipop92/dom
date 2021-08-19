//getElementByID()  - retorna elemento

const element1 = document.getElementById('blog-title')
console.log(element1)



//getElementsByClassName() - retorno HTMLCollection 

const element2 = document.getElementsByClassName('one');
console.log(element2)


//getElementsByTagName() - retorno HTMLCollection

const element3 = document.getElementsByTagName('body')
console.log(element3);



//querySelector() - retorna elemento 

const element4 = document.querySelector('meta')
console.log(element4);


//querySelectorAll() - retorno node list 

const element5 = document.querySelectorAll('meta')
console.log(element5)

const elements = document.querySelectorAll('meta')
elements.forEach(el => console.log(el))