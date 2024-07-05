

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



 function exibirOsLivrosNaTela(listaDeLivros){
    
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="Capa do livro Cangaceiro JavaScript" />
        <h2 class="livro__titulo">
          Cangaceiro JavaScript:
          Uma aventura no sertão da programação
        </h2>
        <p class="livro__descricao">Flávio Almeida</p>
        <p class="livro__preco" id="preco">R$29,90</p>
        <div class="tags">
          <span class="tag">Front-end</span>
        </div>
      </div>
        `
    })

 }


 let a = document.getElementById('num1');
 let b = document.getElementById('num2');
 let somar = document.getElementById('somar')
 let c = document.getElementById('res')

somar.addEventListener ('click', somarNum(6,8))

 function somarNum(num1,num2) {
    
     resultado = num1+ num2
    console.log(resultado) 
 }

