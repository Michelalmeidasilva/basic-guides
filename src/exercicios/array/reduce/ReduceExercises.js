import { getColaboradores, getInstallments } from "../../Data";
import { formatToJson, formatMoney } from "../../../helpers/format-json";

/**
 * Utilizando a função reduce imprima a soma da idade de todos os colaboradores.
 */
const exercise01 = () => {
  const sumAges = getColaboradores().reduce(
    (accumulator, currentValue) => accumulator + currentValue.idade,
    0
  );
  alert(`Idade Total: ${sumAges}`);
  return sumAges;
};

/**
 * Utilizando a função reduce crie e imprima um objeto que possui a quantidade de
 * colaboradores em cada cargo. Saída esperada: 'front-end': 2, 'back-end': 2, designer: 1, estagiario: 1
 */
const exercise02 = () => {
  const reducer = (map, val) => {
    map[val] === undefined ? (map[val] = 1) : ++map[val];
    return map;
  };

  const result = getColaboradores()
    .map((colaborador) => colaborador.cargo)
    .reduce(reducer, {});

  alert(`Saida: ${formatToJson(result, 4)}`);
};

/**
 * Utilizando o array installments fornecido anteriormente realize o seguinte exercício:
 * Utilizando a função reduce imprima o valor total das parcelas.
 */
const exercise03 = () => {
  const sum = getInstallments().reduce(
    (accumulator, { value }) => accumulator + value,
    0
  );
  alert(`Total das parcelas: R\$ ${formatMoney(sum)}`);
};

/**
 * Utilizando a função reduce crie e imprima um objeto
 * que possui o valor total em aberto e já pago. Saída esperada: total_paid: 386.78, total_open: 316.3 .
 */
const exercise04 = () => {
  const reducer = ({ total_paid, total_open }, { value, status }) => {
    status === "Pago" ? (total_paid += value) : (total_open += value);
    return {
      total_paid,
      total_open,
    };
  };

  const result = getInstallments()
    .map((element) => element)
    .reduce(reducer, { total_paid: 0, total_open: 0 });

  alert(`Saida: ${formatToJson(result, 4)}`);
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  exercise01,
  exercise02,
  exercise03,
  exercise04,
};
