import PromisesExercicio from "./PromisesExercicio";

const PromisesScreen = () => {
  return (
    <body>
      <div class="molde">
        <h2>Exercicios de Promises </h2>
        <p>
          1 Criar uma promise que resolva em 2 segundos e retorna um texto
          'resolveu 2'
        </p>
        <button onClick={PromisesExercicio.exercise01}>
          Executar exercício 01
        </button>
        <p>
          2 Criar uma promise que rejeita em 3 segundos e retorna um texto
          'rejeitou 3'
        </p>
        <button onClick={PromisesExercicio.exercise02}>
          Executar exercício 02
        </button>
        <p>
          3 Criar uma promise que resolva em 1 segundos e retorna um texto
          'resolveu 1'
        </p>
        <button onClick={PromisesExercicio.exercise03}>
          Executar exercício 03
        </button>
        <p>
          4 Fazer um exemplo de promise.all que resolve, imprime o resultado de
          todas promises
        </p>
        <button onClick={PromisesExercicio.exercise04}>
          Executar exercício 04
        </button>

        <p>5 Fazer um exemplo de promise.all que rejeita, imprime o erro</p>
        <button onClick={PromisesExercicio.exercise05}>
          Executar exercício 05
        </button>

        <p>6 Fazer um exemplo de promise.race que rejeita, imprime o erro</p>
        <button onClick={PromisesExercicio.exercise06}>
          Executar exercício 06
        </button>
      </div>
    </body>
  );
};

export default PromisesScreen;
