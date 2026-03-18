function alterarStatus(id) {
 let gameClicado = document.getElementById(`game-${id}`);
 let imagem = gameClicado.querySelector('.dashboard__item__img'); 
 let botao = gameClicado.querySelector('.dashboard__item__button'); 

 console.log(alterarStatus);
 console.log(gameClicado);
 console.log(imagem);
 console.log(botao);

 if (imagem.classList.contains('dashboard__item__img--rented')) { 
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';
    
    console.log('O jogo foi devolvido.');
 } else { 
    imagem.classList.add('dashboard__item__img--rented');
    botao.textContent = 'Devolver';
    botao.classList.add('dashboard__item__button--return');
      console.log('O jogo foi alugado.');
 }

}
