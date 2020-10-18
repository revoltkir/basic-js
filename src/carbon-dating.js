const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (isNaN(parseInt(sampleActivity))) return false;
  if (parseInt(sampleActivity) <= 0 || parseInt(sampleActivity) > 15)
    return false;
  if (typeof sampleActivity === "string") {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY / parseInt(sampleActivity)) / k;
    return Math.ceil(t);
  } else return false;
};
