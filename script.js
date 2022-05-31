
/*Script para ficar trocando as Screenshots*/

let imagens = document.querySelectorAll('.screenshot')
let i = 0;
let aux = i;

setInterval( function() {
    
    imagens[i].classList.remove('aparece');
    imagens[i].classList.add('desaparece');
    i++;
    aux = i;
    if(aux==4){
        i = 0 ;
        aux = i;
    }
    imagens[aux].classList.remove('desaparece');
    imagens[aux].classList.add('aparece');

    /*console.log( 'Executa infinitamente, 2 vez por segundo. i = ' + i);*/
  }, 3000 );