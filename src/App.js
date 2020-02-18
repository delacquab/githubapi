import React, { useState } from 'react';
//import './App.css';
import Title from './components/Title';
import Input from './components/Input';
import { getUsers } from './services/api';
import NotFound from './components/NotFound';
import Empty from './components/Empty';
import Repo from './components/Repo';

function App() {
  const alphaExp = /^[a-zA-Z-0-9]+$/;

  const [entrada, setEntrada] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [resultado, setResultado] = useState("");

  const handleChangeInput = event => {
    setEntrada(event.target.value)
  }

  function getQuantideHifen() {
    let count = 0;
    let pos = entrada.indexOf("-");

    while (pos !== -1) {
      count++;
      pos = entrada.indexOf("-", pos + 1);
    }

    return count;
  }

  const handleKeyPressInput = event => {
    if (event.key === "Enter") {
      if (entrada.trim() !== ''
        && entrada.length - 1 < 39
        && entrada[0] !== '-'
        && entrada[entrada.length - 1] !== '-'
        && entrada.match(alphaExp)
        && getQuantideHifen() < 2) {
        console.log("pressionou enter")

        getUsers(entrada)
          .then(json => {
            console.log(json);
            if (json.message === 'Not Found') {
              setResultado("NOT");
              console.log('not');
              setRepositorios([]);
            } else if (json.length === 0) {
              setResultado("EMPTY");
              console.log('empty');
              setRepositorios([]);
            } else {
              setResultado("FIND");
              console.log('find');
              setRepositorios(json);
            }

          })
          .catch(e => {
            console.log("Erro", e);
            setRepositorios([]);
            setResultado("");
          });
      } else {
        console.log("Não validou");
      }
    }
  }

  return (
    <div className="App">
      <Title title="GitHub" subtitle="Veja os repositórios de seu usuário favorito!" />
      <Input value={entrada} onChange={handleChangeInput} onKeyPress={handleKeyPressInput} />

      {resultado === "EMPTY" ? <Empty />
        : resultado === "NOT" ? <NotFound />
          : <Repo repos={repositorios} />
      }



    </div>
  );
}

export default App;
