const CustomError = require("../extensions/custom-error");

const chainMaker = {
  mas: [],
  chain: "",
  getLength() {
    return this.mas.length();
  },
  addLink(value) {
    this.mas.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.mas[position - 1] || !Number.isInteger(position)) {
      this.mas.length = 0;
      throw new Error();
    }
    this.mas.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.mas.reverse();
    return this;
  },
  finishChain() {
    this.chain = this.mas.join("~~");
    this.mas.length = 0;
    return this.chain;
  },
};

module.exports = chainMaker;
