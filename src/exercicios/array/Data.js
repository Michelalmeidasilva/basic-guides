export const getStudents = () => {
  return [
    { id: 1, name: "John Doe", age: 23, scholarship: false },
    { id: 2, name: "Margoe Rose", age: 19, scholarship: true },
    { id: 3, name: "Kayle", age: 22, scholarship: true },
  ];
};

export const getColaboradores = () => {
  return [
    { name: "Juca", idade: 25, cargo: "front-end" },
    { name: "Márcia", idade: 23, cargo: "back-end" },
    { name: "Vitória", idade: 28, cargo: "designer" },
    { name: "Fernando", idade: 19, cargo: "estagiario" },
    { name: "Fabiane", idade: 25, cargo: "back-end" },
    { name: "Jéssica", idade: 23, cargo: "front-end" },
  ];
};
export const getInstallments = () => {
  return [
    { installment_number: 1, value: 123.45, status: "Pago" },
    { installment_number: 2, value: 139.88, status: "Pago" },
    { installment_number: 3, value: 123.45, status: "Pago" },
    { installment_number: 4, value: 182.37, status: "Aberto" },
    { installment_number: 5, value: 133.93, status: "Aberto" },
  ];
};
