import "../../style.css";

import DesestruturacaoExercicio from "./DesestruturacaoExercicio";
import CodeBox from "../CodeBox";
import { getUser, getStudents } from "../Data";

const DesestruturacaoScreen = () => {
  const User = getUser();
  return (
    <body>
      <div class="row">
        <CodeBox>
          <pre>const User ={JSON.stringify(User, null, 4)}</pre>
        </CodeBox>
        <CodeBox>
          const studentsObj =[
          {getStudents().map((element) => (
            <p>{JSON.stringify(element)}</p>
          ))}
          ]
        </CodeBox>
      </div>
      <div class="molde">
        <h2>Exercicios de Desestruturacao </h2>
        <p>
          A) Dado o objeto user, realize os seguintes exercícios utilizando ao
          máximo a desestruturação:
        </p>
        <p>1 Desestruture e imprima o nome.</p>
        <button onClick={DesestruturacaoExercicio.exercise01}>
          Executar exercício 01
        </button>
        <p>2 Desestruture e imprima a rua.</p>
        <button onClick={DesestruturacaoExercicio.exercise02}>
          Executar exercício 02
        </button>
        <p>3 Desestruture e imprima os projetos.</p>
        <button onClick={DesestruturacaoExercicio.exercise03}>
          Executar exercício 03
        </button>
        <p>
          4 A)Desestruture e imprima a segunda posição da propriedade projetos.
        </p>
        <button onClick={DesestruturacaoExercicio.exercise04}>
          Executar exercício 04
        </button>
        <p>
          B) Dado o array studentsObj , realize os seguintes exercícios
          utilizando ao máximo a desestruturação:
        </p>

        <p>1 Desestruture e imprima o primeiro elemento do array.</p>
        <button onClick={DesestruturacaoExercicio.exercise05}>
          Executar exercício 05
        </button>
        <p>2 Desestruture e imprima o terceiro elemento do array.</p>
        <button onClick={DesestruturacaoExercicio.exercise06}>
          Executar exercício 06
        </button>
        <p>3 Desestruture e imprima o nome do segundo elemento do array.</p>
        <button onClick={DesestruturacaoExercicio.exercise07}>
          Executar exercício 07
        </button>
      </div>
    </body>
  );
};

export default DesestruturacaoScreen;
