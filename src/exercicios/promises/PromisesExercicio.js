//Criar uma promise que resolva em 2 segundos e retorna um texto 'resolveu 2'
function exercise01() {
  new Promise((resolve) =>
    setTimeout(() => resolve(console.log("resolveu 2")), 2000)
  );
}

//Criar uma promise que rejeita em 3 segundos e retorna um texto 'rejeitou 3'
function exercise02() {
  new Promise((resolve, reject) =>
    setTimeout(() => reject(console.log("rejeitou 3")), 3000)
  );
}

//Criar uma promise que resolva em 1 segundos e retorna um texto 'resolveu 1'

function exercise03() {
  new Promise((resolve) =>
    setTimeout(() => resolve(console.log("resolveu 1")), 2000)
  );
}

//Fazer um exemplo de promise.all que resolve, imprime o resultado de todas promises
function exercise04() {
  Promise.all([
    Promise.resolve("10"),
    Promise.resolve("32"),
    Promise.resolve("34"),
  ]).then((value) => console.log(value));
}

//Fazer um exemplo de promise.all que rejeita, imprime o erro
function exercise05() {
  Promise.all([
    Promise.reject("10"),
    Promise.reject("32"),
    Promise.reject("test"),
  ]).catch((err) => console.log(err));
}

// Fazer um exemplo de promise.race que resolve, imprime a promise
function exercise06() {
  Promise.race([Promise.resolve("10"), Promise.resolve("32")]).then((promise) =>
    console.log(promise)
  );
}

//Fazer um exemplo de promise.race que rejeita, imprime o erro
function exercise07() {
  Promise.race([Promise.reject("10"), Promise.reject("32")]).catch((err) =>
    console.log(err)
  );
}

const PromisesExercicio = {
  exercise01,
  exercise02,
  exercise03,
  exercise04,
  exercise05,
  exercise06,
  exercise07,
};

export default PromisesExercicio;
