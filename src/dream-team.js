
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let str = "";
    let arr = members.map(function (x) {
      if (typeof x === "string") {
        x = x.trim();
        str += x[0];
      }
    });
    str = [...str.toUpperCase()].sort();
    return str.join("");
  } else return false;
};
