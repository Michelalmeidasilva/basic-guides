export const formatToJson = (obj, formatter) => {
  return JSON.stringify(obj, null, formatter);
};

export const formatMoney = (value) => {
  return Intl.NumberFormat("pt-BR").format(value);
};
