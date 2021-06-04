export const formatToJson = (obj, formatter) =>
  JSON.stringify(obj, null, formatter);

export const formatMoney = (value) => Intl.NumberFormat("pt-BR").format(value);
