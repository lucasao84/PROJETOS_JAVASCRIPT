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

if(nome !== '' && peso !== '' && altura !== ''){
    alert('valor prenchido!!') 
} else { 

resultado.innerHTML = ' prencha o campo!!'

} }

calcular.addEventListener('click', imc);