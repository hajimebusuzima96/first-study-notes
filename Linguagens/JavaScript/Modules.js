// Vantagens da separação de um projeto em arquivos menores:
// Código mais fácil de ler;
// Código mais fácil de manter e atualizar;
// Código mais profissional.
// Ao separarmos o código em partes menores, integramos essas partes através dos comandos import e export.

// (import colecao_signos from './dados/dados.js';)

// (export default colecao_signos;)

// Fazemos essa separação quando o código de um projeto começa a crescer de modo que fica mais fácil mantê-lo 
// em arquivos menores do que em um único arquivo. 


// Ao exportar múltiplos recursos por módulo é necessário colocá-los dentro de chaves após o comando export:

// (export { recurso_1, recurso_2 })

// Para importar múltiplos recursos por módulo é necessário colocá-los dentro de chaves após o comando import:

// (import { recurso_1, recurso_2 } from modulo) 


// Quando trabalhamos com require, devemos exportar os recursos.
// module.exports = {
//     colecao_signos
// }

// E para importar esses recursos, usamos require.
// const dados = require('./data/dados.js');

