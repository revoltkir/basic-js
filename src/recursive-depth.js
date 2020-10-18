const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth();
  }
  calculateDepth(arr) {
    return (
      1 +
      (arr instanceof Array
        ? arr.reduce((max, item) => {
            return Math.max(max, this.calculateDepth(item));
          }, 0)
        : -1)
    );
  }
};
 
