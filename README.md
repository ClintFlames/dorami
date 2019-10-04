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
