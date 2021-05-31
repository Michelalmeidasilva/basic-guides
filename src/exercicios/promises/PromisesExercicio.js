const promise2 = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(console.log("resolveu 2")), 2000)
  );
const promise3 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject(console.log("rejeitou 3")), 3000)
  );
const promise1 = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(console.log("resolveu 1")), 2000)
  );

function exercise01() {
  promise2();
}
function exercise02() {
  promise3();
}
function exercise03() {
  promise1();
}
function exercise04() {
  Promise.all([promise1(), promise2(), promise3()]).then((values) => {
    console.log(values);
  });
}
function exercise05() {
  // console.log("Promises 5");
}

function exercise06() {
  // Promise.race([promise1(), promise2(), promise3()]).then((values) => {
  //   console.log(values);
  // });
}

const PromisesExercicio = {
  exercise01,
  exercise02,
  exercise03,
  exercise04,
  exercise05,
  exercise06,
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default PromisesExercicio;
