import Sort from "./SortExercises";

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

export default SortScreen;
