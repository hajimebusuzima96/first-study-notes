// FUNÇÃO PRINCIPAL

let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20","DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-19"},
    {"Nome": "Touro", "DataInicio": "04-20","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
    {"Nome": "Libra", "DataInicio": "09-23","DataFim":"10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23","DataFim":"11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-19"}
];

const retorna_signo = (signos) => {

    return signos[0]["Nome"];

}

const nome_signo = retorna_signo(colecao_signos);

console.log("O signo de hoje é: " + nome_signo);


// EVOLUINDO A FUNÇÃO PRINCIPAL 

let signos = [
    {"Nome": "Aquário", "DataInicio": "01-21","DataFim":"02-19"},
    {"Nome": "Peixes", "DataInicio": "02-20","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-20"},
    {"Nome": "Touro", "DataInicio": "04-21","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-22","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-21","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-23"},
    {"Nome": "Virgem", "DataInicio": "08-24","DataFim":"09-23"},
    {"Nome": "Libra", "DataInicio": "09-24","DataFim":"10-23"},
    {"Nome": "Escorpião", "DataInicio": "10-24","DataFim":"11-22"},
    {"Nome": "Sagitário", "DataInicio": "11-23","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-20"}
   ];
   
   const retorna_signo = (signos) => {
   
    let data = new Date("2020-02-07 00:00:00");
   
    let ano = data.getFullYear();
   
    let data_inicio_signo =
     new Date(ano + "-" + signos[0]["DataInicio"] + " 00:00:00");
    let data_fim_signo =
     new Date(ano + "-" + signos[0]["DataFim"] + " 23:59:59");
   
    if( data >= data_inicio_signo && data <= data_fim_signo ){
     return signos[0]["Nome"];
    }
   
   }
   
   const nome_signo = retorna_signo(signos);
   
   console.log("O signo de hoje é: " + nome_signo);

// PASSANDO A DATA COMO PARÂMETRO 

let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20","DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-19"},
    {"Nome": "Touro", "DataInicio": "04-20","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
    {"Nome": "Libra", "DataInicio": "09-23","DataFim":"10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23","DataFim":"11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-19"}
];

const retorna_signo = (signos, data) => {

    let ano = data.getFullYear();

    let data_inicio_signo =
     new Date(ano + "-" + signos[0]["DataInicio"] + " 00:00:00");
    let data_fim_signo =
     new Date(ano + "-" + signos[0]["DataFim"] + " 23:59:59");

    if ( data >= data_inicio_signo && data <= data_fim_signo ){
        return signos[0]["Nome"];
    }

}

let data_app = new Date("2020-02-07 00:00:00");

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);


// PERCORRENDO SIGNOS COM LAÇO DE REPETIÇÃO 

let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20","DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-19"},
    {"Nome": "Touro", "DataInicio": "04-20","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
    {"Nome": "Libra", "DataInicio": "09-23","DataFim":"10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23","DataFim":"11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-19"}
];

const retorna_signo = (signos, data) => {

    let ano = data.getFullYear();

    for ( const signo of signos ){

        let data_inicio_signo =
         new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim_signo =
         new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        if ( data >= data_inicio_signo && data <= data_fim_signo ){
            return signo["Nome"];
        }

    }

}

let data_app = new Date("2020-07-28 00:00:00");

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);


// CORREÇÃO DE BUG 

let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20","DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-19"},
    {"Nome": "Touro", "DataInicio": "04-20","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
    {"Nome": "Libra", "DataInicio": "09-23","DataFim":"10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23","DataFim":"11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-19"}
];

const retorna_signo = (signos, data) => {

    let ano = data.getFullYear();

    for ( const signo of signos ){

        let data_inicio_signo =
         new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim_signo =
         new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if ( tipo_comparacao == "and"){

            if ( data >= data_inicio_signo && data <= data_fim_signo ){
                return signo["Nome"];
            }

        } else if (tipo_comparacao == "or"){

            if ( data >= data_inicio_signo || data <= data_fim_signo ){
                return signo["Nome"];
            }

        }

    }

}

let data_app = new Date();

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);


//REFATORAÇÃO DO CÓDIGO 

let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20","DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-19"},
    {"Nome": "Touro", "DataInicio": "04-20","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
    {"Nome": "Libra", "DataInicio": "09-23","DataFim":"10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23","DataFim":"11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-19"}
];

const verifica_data_range =
 (data, data_inicio, data_fim, tipo_comparacao) => {

    if ( tipo_comparacao == "and" ){
        return (data >= data_inicio && data <= data_fim);
    } else if( tipo_comparacao == "or" ){
        return (data >= data_inicio || data <= data_fim);
    }

}

const retorna_signo = (signos, data) => {

    let ano = data.getFullYear();

    for (const signo of signos ){

        let data_inicio_signo =
         new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim_signo =
         new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (verifica_data_range
         (data, data_inicio_signo, data_fim_signo, tipo_comparacao)){
            return signo["Nome"];
        }

    }

}

let data_app = new Date(“2020-12-30 00:00:00”);

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);

// USANDO A DATA DO SISTEMA 

let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20","DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-19"},
    {"Nome": "Touro", "DataInicio": "04-20","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
    {"Nome": "Libra", "DataInicio": "09-23","DataFim":"10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23","DataFim":"11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-19"}
];

const verifica_data_range =
 (data, data_inicio, data_fim, tipo_comparacao) => {

    if ( tipo_comparacao == "and" ){
        return (data >= data_inicio && data <= data_fim);
    } else if( tipo_comparacao == "or" ){
        return (data >= data_inicio || data <= data_fim);
    }

}

const retorna_signo = (signos, data) => {

    let ano = data.getFullYear();

    for ( const signo of signos ){

        let data_inicio_signo =
         new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim_signo =
         new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (verifica_data_range
         (data, data_inicio_signo, data_fim_signo, tipo_comparacao)){
            return signo["Nome"];
        }

    }

}

let data_app = new Date();

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);


