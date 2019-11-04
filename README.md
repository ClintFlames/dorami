<div align="center">
  <p>
    <div>
      <a href="https://www.npmjs.com/package/dorami">
        <img alt="npm version" src="https://img.shields.io/npm/v/dorami">
      <a>
      <a href="https://www.npmjs.com/package/dorami">
        <img src="https://img.shields.io/npm/dt/dorami.svg" alt="npm downloads">
      </a>
    </div>
    <div>
      <a href="https://github.com/CFormen3000/dorami">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/CFormen3000/dorami?logo=github">
      </a>
    </div>
  </p>
  <p>
    <a href="https://nodei.co/npm/dorami/">
      <img src="https://nodei.co/npm/dorami.png?downloads=true&stars=true">
    </a>
  </p>
</div>

# DoRami encryption.
DoRami encryption allows you to encrypt text files without the possibility of decryption when you connect this module in another project or when you change the unique code.

```javascript
//Declare a variable.
const DoRami = require('DoRami');

//Encode.
let cipher = DoRami.in('Text or variable.');

//Console log result.
console.log(cipher);

//Lets decipher.
cipher = DoRami.out(cipher);

//Console log result.
console.log(cipher);

//A unique code is generated for the first time automatically, to change it you need to use the function.
DoRami.gen();
```
## Good luck)
[Discord.](https://discord.gg/d4rKqZs)
