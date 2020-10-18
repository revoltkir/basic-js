  
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let mas = [];
  let sym = Symbol();
  for (let i = 0; i < arr.length; i++) {
    mas[i] = arr[i];
  }
  let ln = mas.length;
  for (let i = 0; i < ln; i++) {
    ln = mas.length;
    switch (mas[i]) {
      case "--double-next":
        if (i != ln - 1) mas[i] = mas[i + 1];
        else mas.splice(i, 1);
        break;
      case "--double-prev":
        if (i != 0) {
          if (typeof mas[i - 1] != "symbol") mas[i] = mas[i - 1];
          else mas.splice(i, 1);
        } else {
          mas.splice(i, 1);
          i--;
        }
        break;
      case "--discard-next":
        if (i != ln - 1) {
          mas[i] = sym;
          mas.splice(i + 1, 1);
        } else mas.splice(i, 1);
        break;
      case "--discard-prev":
        if (i != 0) {
          if (typeof mas[i - 1] == "symbol") mas.splice(i, 1);
          else {
            mas.splice(i - 1, 2);
            i--;
          }
        } else {
          mas.splice(i, 1);
          i--;
        }
        break;
    }
  }

  for (let i = 0; i < mas.length; i++) {
    if (typeof mas[i] == "symbol") {
      mas.splice(i, 1);
      i--;
    }
  }
  return mas;
};
