  
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(param) {
    this.param = param;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error();
    message = message.toUpperCase();
    key = key.toUpperCase();
    if (!/[A-Z]/g.test(message)) return message;
    let messageLetterLength = message.match(/[A-Z]/g).length;
    if (key.length < messageLetterLength) {
      while (key.length <= messageLetterLength) key += `${key}`;
      key = key.substring(0, messageLetterLength);
    }
    let shyfr = [];
    let j = 0;
    for (i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        shyfr[i] = String.fromCharCode(
          ((message.charCodeAt(i) + key.charCodeAt(j)) % 26) + 65
        );
      } else {
        shyfr[i] = message[i];
        j--;
      }
      j++;
    }
    if (this.param == false) return shyfr.reverse().join("");
    else return shyfr.join("");
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error();
    message = message.toUpperCase();
    key = key.toUpperCase();
    if (!/[A-Z]/g.test(message)) return message;
    let messageLetterLength = message.match(/[A-Z]/g).length;
    if (key.length < messageLetterLength) {
      while (key.length <= messageLetterLength) key += `${key}`;
      key = key.substring(0, messageLetterLength);
    }
    let shyfr = [];
    let j = 0;
    for (i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        shyfr[i] = String.fromCharCode(
          ((message.charCodeAt(i) + 26 - key.charCodeAt(j)) % 26) + 65
        );
      } else {
        shyfr[i] = message[i];
        j--;
      }
      j++;
    }
    if (this.param == false) return shyfr.reverse().join("");
    else return shyfr.join("");
  }
}

module.exports = VigenereCipheringMachine;
