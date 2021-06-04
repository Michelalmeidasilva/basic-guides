import { getUser, getStudents } from "../Data";

/**
 * A) Dado o objeto user, realize os seguintes exercícios utilizando ao máximo a desestruturação:
 */

//1 Desestruture e imprima o nome.

function exercise01() {
  const { nome } = getUser();
  alert(`nome: ${nome}`);
}

//2 Desestruture e imprima a rua.

function exercise02() {
  var User = getUser();
  const {
    endereco: { rua },
  } = User;
  alert(`rua: ${rua}`);
}

//3 Desestruture e imprima os projetos.

function exercise03() {
  const { projetos } = getUser();
  alert(`projetos: ${projetos}`);
}

//4 A)Desestruture e imprima a segunda posição da propriedade projetos.
function exercise04() {
  const { projetos } = getUser();
  alert(`projetos: ${projetos[1]}`);
}

/**
 * B) Dado o array studentsObj , realize os seguintes exercícios utilizando ao máximo a desestruturação:
 */

//1 Desestruture e imprima o primeiro elemento do array.

function exercise05() {
  const Students = getStudents();
  const {
    id: idFirstElement,
    name: NameFirstElement,
    age: ageFirstElement,
    scholarship: scholarshipFirstElement,
  } = Students[0];

  alert(`
    Primeiro elemento: ${idFirstElement},${ageFirstElement},${NameFirstElement},${scholarshipFirstElement}
  `);
}

//2 Desestruture e imprima o terceiro elemento do array.
function exercise06() {
  console.log("Desestruturação 6");
}

//3 Desestruture e imprima o nome do segundo elemento do array.
function exercise07() {
  const { name: nameTest } = getStudents()[1];

  alert(`Terceiro elemento: ${nameTest}`);
}

const DesestruturacaoExercicio = {
  exercise01,
  exercise02,
  exercise03,
  exercise04,
  exercise05,
  exercise06,
  exercise07,
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default DesestruturacaoExercicio;
