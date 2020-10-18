const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  let mas = matrix.map(function (x) {
    for (item of x) {
      if (item == "^^") count++;
    }
    return count;
  });
  return count;
};
