import { getStudents } from "../../Data";

/**
 * Retornar um array de nomes existentes.
 */
function exercise01() {
  const studentsNames = getStudents().map(({ name }) => name);
  alert(`nomes existentes: ${JSON.stringify(studentsNames, null, 2)}`);
  return studentsNames;
}

/**
 * Retornar um array de items de estudantes que têm bolsa.
 */
function exercise02() {
  const studentsHasScholarship = getStudents().filter(
    (element) => element.scholarship
  );
  alert(
    `Array de Estudantes com bolsa: ${JSON.stringify(
      studentsHasScholarship,
      null,
      4
    )}`
  );
  return studentsHasScholarship;
}

/**
 * Retornar um array de items de pessoas com menos de 23 anos.
 */
function exercise03() {
  const studentsLessThan23 = getStudents().filter(
    (element) => element.age < 23
  );
  alert(
    `Array de Estudantes com menos de 23 anos: ${JSON.stringify(
      studentsLessThan23,
      null,
      2
    )}`
  );
  return studentsLessThan23;
}

/**
 * Testar se todos são bolsistas (scholarship).
 */
function exercise04() {
  const testScholaship = getStudents().every(
    (element) => element.scholarship === true
  );
  alert(`Teste: Todos são bolsistas? ${testScholaship}`);
}

/**
 * Testar se existe algum bosista (scholarship).
 */
function exercise05() {
  const testScholaship = getStudents().some(
    (student) => student.scholarship === true
  );
  alert(`Teste: Existe alguem bolsista? ${testScholaship}`);
}

/**
 * Retornar a soma de todos as idades dos alunos.
 */
function exercise06() {
  const sumAges = getStudents().reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    0
  );
  alert(`Idade Total: ${sumAges}`);
  return sumAges;
}

/**
 * Retornar um array em ordem crescente de idades.
 */
function exercise07() {
  const studentsbyAscAges = getStudents().sort((a, b) => a.age - b.age);
  alert(`Ordem Crescente: ${JSON.stringify(studentsbyAscAges, null, 4)}`);
  return studentsbyAscAges;
}

/**
 * Retornar um array em ordem decrescente de idades.
 */
function exercise08() {
  const studentsbyDscAges = getStudents().sort((a, b) => b.age - a.age);
  alert(`Ordem Descrescente: ${JSON.stringify(studentsbyDscAges, null, 4)}`);
  return studentsbyDscAges;
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  exercise01,
  exercise02,
  exercise03,
  exercise04,
  exercise05,
  exercise06,
  exercise07,
  exercise08,
};
