export const retornaMensagemAPI = (callback) => {
  const endpoint = 'http://localhost:8080/';

  fetch(endpoint)
    .then((r)=>r.json())
      .then((data) => callback(data.mensagem))
      .catch(()=> callback('Não foi possível acessar a API'));
}
