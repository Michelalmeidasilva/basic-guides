import { getColaboradores, getInstallments } from "../../Data";
import { formatToJson } from "../../../helpers/format-json";
/**
 * D)Utilizando o array colaboradores fornecido anteriormente realize os seguintes exercícios:
 * Utilizando a função sort imprima o array de colaboradores ordenado por idade de forma crescente.
 */

function exercise01() {
  const colaboradoresASC = getColaboradores().sort((a, b) => a.age - b.age);
  alert(`Em ordem crescente:${formatToJson(colaboradoresASC, 4)}`);
}

/**
 * .Utilizando a função sort imprima o array de colaboradores ordenado por idade de forma decrescente..
 */
function exercise02() {
  const colaboradoresDSC = getColaboradores().sort((a, b) => b.age - a.age);
  alert(`Em ordem crescente:${formatToJson(colaboradoresDSC, 4)}`);
}

/**
 * . Utilizando a função sort imprima o array de colaboradores ordenado
 * por cargo, sendo a ordem: estagiario (1º), front-end (2º), back-end (3º), designer (4º).
 */
function exercise03() {
  const result = sortbySpecificOrder(getColaboradores());
  alert(`Em ordem pedida:${formatToJson(result, 4)}`);
}

function sortbySpecificOrder(arr) {
  const sortBy = ["estagiario", "front-end", "back-end", "designer"];
  return arr.sort(function (a, b) {
    return sortBy.indexOf(a.cargo) - sortBy.indexOf(b.cargo);
  });
}

/**
 *  Utilizando uma única função sort imprima o
 *  array de colaboradores ordenados por idade e, em caso de empate, ordenado por cargo..
 */

function exercise04() {
  const result = getColaboradores().sort(
    (x, y) => x.idade - y.idade || x.cargo - y.cargo
  );
  alert(formatToJson(result), 2);
}

// Utilizando o array installments fornecido anteriormente realize os seguintes exercícios:

/*
 * Utilizando a função sort imprima o array de installments ordenado por valor de forma decrescente.
 */
function exercise05() {
  alert(formatToJson(getInstallments().sort((x, y) => y.value - x.value)));
}

/**
 * Utilizando a função sort imprima o array de installments ordenado por valor de forma crescente,
 * em caso de empate, o desempate deve ocorrer pelo número da parcela de forma decrescente.
 */
function exercise06() {
  alert(formatToJson(getInstallments().sort((x, y) => x.value - y.value)), 2);
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
