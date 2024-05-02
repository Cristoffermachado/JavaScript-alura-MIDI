function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null){
        console.log('Elemento não encontrado');
    }

    if (elemento != null && elemento.localName === 'audio'){
          elemento.play();
        }
    else{
        console.log('Elemento não encontrado na pesquisa');
    }
}   

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
        }

    }
    tecla.onkeyup = function(evento){
        tecla.classList.remove('ativa');
    }
}
