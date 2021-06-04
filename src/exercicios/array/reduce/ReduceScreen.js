import Reduce from "./ReduceExercises";

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

export default ReduceScreen;
