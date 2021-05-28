import { getColaboradores } from "../Data";

/**
 * D)Utilizando o array colaboradores fornecido anteriormente realize os seguintes exercícios:
 * Utilizando a função sort imprima o array de colaboradores ordenado por idade de forma crescente.
 */

function exercise01() {
  console.log("Sort 1");
}

/**
 * .Utilizando a função sort imprima o array de colaboradores ordenado por idade de forma decrescente..
 */
function exercise02() {
  console.log("Sort 2");
}
/**
 * . Utilizando a função sort imprima o array de colaboradores ordenado
 * por cargo, sendo a ordem: estagiario (1º), front-end (2º), back-end (3º), designer (4º).
 */
function exercise03() {
  console.log("Sort 3");
}

/**
 *  Utilizando uma única função sort imprima o
 *  array de colaboradores ordenados por idade e, em caso de empate, ordenado por cargo..
 */

function exercise04() {
  console.log("Sort 4");
}

// Utilizando o array installments fornecido anteriormente realize os seguintes exercícios:

/*
 * Utilizando a função sort imprima o array de installments ordenado por valor de forma decrescente.
 */
function exercise05() {
  console.log("Sort 5");
}

/**
 * Utilizando a função sort imprima o array de installments ordenado por valor de forma crescente,
 * em caso de empate, o desempate deve ocorrer pelo número da parcela de forma decrescente.
 */
function exercise06() {
  console.log("Sort 6");
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  exercise01,
  exercise02,
  exercise03,
  exercise04,
  exercise05,
  exercise06,
};
