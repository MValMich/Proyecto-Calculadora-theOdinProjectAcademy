
let preimerNumero 
let segundoNumero 
let operador
// PANTALLA
const Pantalla = document.querySelector('#Pantalla')
// BOTONES NUMERICOS
const btnNum = document.querySelectorAll('.btnNum')
btnNum.forEach((button)=>{
  button.addEventListener('click', (event)=>{
    const Pantalla = document.querySelector('#Pantalla')
    let target = event.target
    switch (target.id) {
      case '1': Pantalla.value = Pantalla.value + '1'
        break;
      case '2': Pantalla.value = Pantalla.value + '2'
        break;
      case '3': Pantalla.value = Pantalla.value + '3'
        break;
      case '4': Pantalla.value = Pantalla.value + '4'
        break;
      case '5': Pantalla.value = Pantalla.value + '5'
        break;
      case '6': Pantalla.value = Pantalla.value + '6'
        break;
      case '7': Pantalla.value = Pantalla.value + '7'
        break;
      case '8': Pantalla.value = Pantalla.value + '8'
        break;
      case '9': Pantalla.value = Pantalla.value + '9'
        break;
      case '0': Pantalla.value = Pantalla.value + '0'
        break;
    }
  })
})
// BOTONES OPERADORES
const btnOper = document.querySelectorAll('.btnOper')
btnOper.forEach((button)=>{
  button.addEventListener('click', (event)=>{
    const Pantalla = document.querySelector('#Pantalla')
    let target = event.target
    switch (target.id) {
      case '+': Pantalla.value = Pantalla.value + '+'
        break;
      case '-': Pantalla.value = Pantalla.value + '-'
        break;
      case '*': Pantalla.value = Pantalla.value + '*'
        break;
      case '/': Pantalla.value = Pantalla.value + '/'
        break;
    }
  })
})
// OBTENER RESULTADOS MATEMATICOS
const Result = document.querySelector('#Result')
Result.addEventListener('click', (Pantalla)=>{
Pantalla = document.querySelector('#Pantalla')
Pantalla.value = ( new Function ('return('+ Pantalla.value +')')())
})
// BORRAR PANTALLA
const Borrar = document.querySelector('#Borrar')
Borrar.addEventListener('click', ()=>{
  Pantalla.value = ''
})



