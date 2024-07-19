document.addEventListener('DOMContentLoaded', function(){
    const botoesAbas = document.querySelectorAll('[data-tab-button]');
    const imagemFilme = document.querySelectorAll('.filmes__list__item__img');

    for (let i = 0; i < botoesAbas.length; i++){
        botoesAbas[i].addEventListener('click', function(botao){
            const abaSelecionada = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaSelecionada}]`);

            removeConteudo();
            aba.classList.add('filmes__list--is-active');
            
            removeBotaoAtivo();
            botao.target.classList.add('filmes__atores__ator--is-active')
        })
    }

    for (let i = 0; i < imagemFilme.length; i++) {
        imagemFilme[i].addEventListener('mouseenter', function(evento) {
            const containerImg = evento.target.parentNode;
            containerImg.querySelector('.filmes__list__item__button').classList.add('filmes__list__item__button--active');
        });

        imagemFilme[i].addEventListener('mouseleave', function(evento) {
            const containerImg = evento.target.parentNode;
            containerImg.querySelector('.filmes__list__item__button').classList.remove('filmes__list__item__button--active');
        });
    }

    const containerFavoritos = document.querySelector('.filmes__list__favoritos');
    const botoesAdicionar = document.querySelectorAll('.filmes__list__item__button-add');

    for (let i = 0; i < botoesAdicionar.length; i++) {
        botoesAdicionar[i].addEventListener('click', function(e) {
            const imagemFilme = e.target.parentNode.parentNode.querySelector('img');
            const tituloFilme = e.target.parentNode.parentNode.parentNode.querySelector('.title');
            const filmeSrc = imagemFilme.src;

            // Verifica se o filme já está na lista de favoritos
            const filmesFavoritos = containerFavoritos.querySelectorAll('img');
            let filmeJaAdicionado = false;

            for (let j = 0; j < filmesFavoritos.length; j++) {
                if (filmesFavoritos[j].src === filmeSrc) {
                    filmeJaAdicionado = true;
                    break;
                }
            }

            // Se o filme não estiver na lista, adiciona
            if (!filmeJaAdicionado) {
                const filme = document.createElement('div');
                filme.classList.add('filmes__list__item');
                filme.innerHTML = `
                    ${tituloFilme.outerHTML}
                    <div class="filmes__list__item__container-img">
                        ${imagemFilme.outerHTML}
                        <button class="text filmes__list__item__button filmes__list__item__button-play" type="button">
                            <img src="../dist/images/icon-play-black.svg" alt="Ícone de play">   
                        </button>
                        <button class="text filmes__list__item__button filmes__list__item__button-remove" type="button">
                            <img src="../dist/images/icon-remove.svg" alt="Ícone de remover">   
                        </button>
                    </div>
                `;

                // Adiciona evento ao botão de remoção
                filme.querySelector('.filmes__list__item__button-remove').addEventListener('click', function() {
                    containerFavoritos.removeChild(filme);
                });

                containerFavoritos.appendChild(filme);
            } else {
                alert('Esse filme já está na sua lista!');
            }

            console.log(containerFavoritos);
        });
    }

    
})

function removeConteudo(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i=0; i<tabsContainer.length; i++){
        tabsContainer[i].classList.remove('filmes__list--is-active')
    }
}

function removeBotaoAtivo(){
    const botoesAbas = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < botoesAbas.length; i++){
        botoesAbas[i].classList.remove('filmes__atores__ator--is-active');
    }
}
