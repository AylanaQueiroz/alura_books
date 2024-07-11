var arr = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';


async function getBuscarLivrosDaAPI() {
  const res= await fetch(endpointDaApi)

   arr = await res.json()
}

console.table(arr)