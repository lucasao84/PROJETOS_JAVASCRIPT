let liGar = document.getElementById('ligar')
let lamPa = document.getElementById('desligada')
let ligaDesliga = document.getElementById('Ligardesliga')


function queBrada(){
    return lamPa.src.indexOf ('quebrada') > -1
}

function lampa(){
if(!queBrada()){
  lamPa.src = 'img/ligada.jpg'} 
}

 
function lampa1(){
    if(!queBrada()){
      lamPa.src = 'img/desligada.jpg'} else if (!queBrada()){

     lamPa.src = 'img/ligada.jpg' }
    }

     
 

function ligando(){
    if(!queBrada()){
    lamPa.src = 'img/ligada.jpg' }

}
    


function lampar(){
   
    lamPa.src ='img/quebrada.jpg'
    
}

function des(){
    if(!queBrada()){
        lamPa.src = 'img/desligada.jpg' }
}






    







 ligaDesliga.addEventListener('click', LigaOn);
lamPa.addEventListener('mouseover', ligando);
lamPa.addEventListener('mouseleave', lampa1);
lamPa.addEventListener('dblclick', lampar);