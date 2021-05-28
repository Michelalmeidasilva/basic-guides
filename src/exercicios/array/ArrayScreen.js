import { Reduce } from "./reduce/";
import { Sort } from "./sort/";
import { Geral } from "./geral/";

import { getStudents, getInstallments, getColaboradores } from "./Data";

import "../../style.css";

const ArrayScreen = () => {
  return (
    <body>
      <div class="constantes">
        <CodeBox objName="studentsObj" obj={getStudents()}></CodeBox>
        <CodeBox objName="colaboradores" obj={getInstallments()}></CodeBox>
        <CodeBox objName="installments" obj={getColaboradores()}></CodeBox>
      </div>
      <GeralScreen></GeralScreen>
      <ReduceScreen></ReduceScreen>
      <SortScreen></SortScreen>
    </body>
  );
};

const SortScreen = () => {
  return (
    <div class="molde">
      <h2>Exercicios Metodo de Sort</h2>
      <p>
        D)Utilizando o array colaboradores fornecido anteriormente realize os
        seguintes exercícios:
      </p>
      <p>
        1 D.Utilizando a função sort imprima o array de colaboradores ordenado
        por idade de forma crescente.
      </p>
      <button onClick={Sort.exercise01}>Executar exercício 01</button>
      <p>
        2 D.Utilizando a função sort imprima o array de colaboradores ordenado
        por idade de forma decrescente..
      </p>
      <button onClick={Sort.exercise02}>Executar exercício 02</button>
      <p>
        3 D. Utilizando a função sort imprima o array de colaboradores ordenado
        por cargo, sendo a ordem: estagiario (1º), front-end (2º), back-end
        (3º), designer (4º).
      </p>
      <button onClick={Sort.exercise03}>Executar exercício 03</button>
      <p>
        4 D. Utilizando uma única função sort imprima o array de colaboradores
        ordenados por idade e, em caso de empate, ordenado por cargo..
      </p>
      <button onClick={Sort.exercise04}>Executar exercício 04</button>
      <p>
        {" "}
        E) Utilizando o array installments fornecido anteriormente realize os
        seguintes exercícios:
      </p>
      <p>
        1 E. Utilizando a função sort imprima o array de installments ordenado
        por valor de forma decrescente.
      </p>
      <button onClick={Sort.exercise05}>Executar exercício 1 </button>
      <p>
        2 E. Utilizando a função sort imprima o array de installments ordenado
        por valor de forma crescente, em caso de empate, o desempate deve
        ocorrer pelo número da parcela de forma decrescente.
      </p>
      <button onClick={Sort.exercise06}>Executar exercício 2 </button>
    </div>
  );
};

const ReduceScreen = () => {
  return (
    <div class="molde">
      <h2>Exercicios Método de Reduce</h2>
      <p>
        B)Utilizando o array colaboradores fornecido anteriormente realize os
        seguintes exercícios:{" "}
      </p>
      <p>
        1 B. Utilizando a função reduce imprima a soma da idade de todos os
        colaboradores.
      </p>
      <button onClick={Reduce.exercise01}>Executar exercício 01</button>
      <p>
        2 B.Utilizando a função reduce crie e imprima um objeto que possui a
        quantidade de colaboradores em cada cargo. Saída esperada: 'front-end':
        2, 'back-end': 2, designer: 1, estagiario: 1{" "}
      </p>
      <button onClick={Reduce.exercise02}>Executar exercício 02</button>
      <p>
        C) Utilizando o array installments fornecido anteriormente realize o
        seguinte exercício:{" "}
      </p>
      <p>1 C. Utilizando a função reduce imprima o valor total das parcelas.</p>
      <button onClick={Reduce.exercise03}>Executar exercício 01</button>
      <p>
        2 C. Utilizando a função reduce crie e imprima um objeto que possui o
        valor total em aberto e já pago. Saída esperada: total_paid: 386.78,
        total_open: 316.3 .
      </p>
      <button onClick={Reduce.exercise04}>Executar exercício 02</button>
    </div>
  );
};

const GeralScreen = () => {
  return (
    <div class="molde">
      <h2>Exercicios Geral de Arrays</h2>
      <p>
        A) Utilizando o array studentsObj fornecido anteriormente realize os
        seguintes exercícios:{" "}
      </p>
      <p>1 A. Retornar um array de nomes existentes.</p>
      <button onClick={Geral.exercise01}>Executar exercício 01</button>
      <p>2 A. Retornar um array de items de estudantes que têm bolsa.</p>
      <button onClick={Geral.exercise02}>Executar exercício 02</button>
      <p>3 A.Retornar um array de items de pessoas com menos de 23 anos.</p>
      <button onClick={Geral.exercise03}>Executar exercício 03</button>
      <p>4 A.Testar se todos são bolsistas (scholarship).</p>
      <button onClick={Geral.exercise04}>Executar exercício 04</button>
      <p>5 A.Testar se existe algum bosista (scholarship).</p>
      <button onClick={Geral.exercise05}>Executar exercício 05</button>
      <p>6 A.Retornar a soma de todos as idades dos alunos.</p>
      <button onClick={Geral.exercise06}>Executar exercício 06</button>
      <p>7 A.Retornar um array em ordem crescente de idades.</p>
      <button onClick={Geral.exercise07}>Executar exercício 07</button>
      <p>8 A.Retornar um array em ordem decrescente de idades.</p>
      <button onClick={Geral.exercise08}>Executar exercício 08</button>
    </div>
  );
};

const CodeBox = ({ obj, objName }) => {
  return (
    <div class="codebox">
      const {objName} =[
      {obj.map((element) => (
        <p>{JSON.stringify(element)}</p>
      ))}
      ]
    </div>
  );
};

export default ArrayScreen;
