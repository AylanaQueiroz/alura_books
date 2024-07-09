
const teste =[]
let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI()

const elementoParaInserirLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI() {

    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    console.table(livros);
    exibirOsLivrosNaTela(livros);

}



 function exibirOsLivrosNaTela(jonatas){
    
    jonatas.forEach(aylana => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${aylana.imagem}" alt="${aylana.alt}" />
        <h2 class="livro__titulo">
          ${aylana.titulo}
        </h2>
        <p class="livro__descricao"> ${aylana.autor}</p>
        <p class="livro__preco" id="preco">R$${aylana.preco}</p>
        <div class="tags">
          <span class="tag">${aylana.categoria}</span>
        </div>
      </div>
        `
    })

 }

