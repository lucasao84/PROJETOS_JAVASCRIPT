const nome = document.getElementById('inome')
const altura = document.getElementById('ialtura')
const peso = document.getElementById('ipeso')
const calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')

function imc() {
const nome = document.getElementById('inome').value
const altura = document.getElementById('ialtura').value
const peso = document.getElementById('ipeso').value
const calcular = document.getElementById('calcular')

if( nome !== '' && peso !== '' && altura !== ''){
    const ValorImc = (peso / (altura * altura)).toFixed(2)

    let classic = ''

    if(ValorImc < 18.50 ){
        classic = 'abaixo do peso'
    } else if(ValorImc < 25) { classic = 'com peso ideal'} 
      else if(ValorImc < 30) {classic = 'levimente acima do peso'}
      else if(ValorImc < 35){classic = 'Obesidade Grau I'}
      else if(ValorImc < 50){classic ='Obesidade Grau II'}
      else {
        classic = 'Obesidade Grau III'
      }



    resultado.innerHTML = `Ola ${nome} o valor do seu IMC e de ${(ValorImc)} de massa corporal e voce estar ${classic}`
} else { 

alert('prencha o campo abaixo!!')

} }

calcular.addEventListener('click', imc);