const CustomError = require("../extensions/custom-error");
 
const repeaterMaker = {
  mas: [],
  repeater: "",
  additionStr: "",
  repeatTimes(
    value,
    number,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  ) {
    if (!number) number = 1;
    if (!separator) separator = "+";
    if (addition === undefined) addition = "";
    if (!additionSeparator) additionSeparator = "";
    if (!additionRepeatTimes) {
      additionRepeatTimes = 1;
      additionSeparator = "";
    }

    for (i = 1; i <= additionRepeatTimes; i++) {
      if (i == additionRepeatTimes)
        this.additionStr = `${this.additionStr}${addition}`;
      else
        this.additionStr = `${this.additionStr}${addition}${additionSeparator}`;
    }
    for (i = 0; i < number; i++) {
      this.mas.push(`${value}${this.additionStr}`);
    }
    this.repeater = this.mas.join(separator);
    this.mas.length = 0;
    this.additionStr = "";
    return this.repeater;
  },
};

module.exports = function repeater(str, options) {
  //console.log(options.separator);
  return repeaterMaker.repeatTimes(
    str,
    options.repeatTimes,
    options.separator,
    options.addition,
    options.additionRepeatTimes,
    options.additionSeparator
  );
};
