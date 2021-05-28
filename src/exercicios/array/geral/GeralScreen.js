import Geral from "./GeralExercises";

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

export default GeralScreen;
