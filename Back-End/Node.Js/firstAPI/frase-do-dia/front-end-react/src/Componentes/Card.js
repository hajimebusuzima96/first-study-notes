import React, {useState} from 'react';
import { retornaMensagemAPI } from '../Funcoes';

const Card = () => {
  const [ mensagem, setMensagem ] = useState("");

  const _cliqueConsumirAPI = () => retornaMensagemAPI(setMensagem);

  return (
    <div className="card-container">
      { mensagem.length > 0
        ?
          <div className="card">
              <h1>Mensagem do dia</h1>
              <p>{ mensagem }</p>
          </div>
        : 
          <div className="card">
            <p>Clique no botão abaixo para consumir a API em Node.js e ver a mensagem do dia</p>
            <button onClick={_cliqueConsumirAPI}>
              Consumir API
            </button>
          </div>
      }
      </div>
  );
}

export default Card;
