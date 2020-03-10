# Dorami encryption.

**Important! Previously encrypted text will not be decrypted in this version.**

## What's new:
- Encrypted text takes up 3 times less memory.
- Resistance to brute force has increased.
- The readability of the encrypted text has decreased.
- You can save many ciphers and give them names, as well as add your own.
- The speed of work has increased.

## What was deleted:
- All the old non-optimized code.

### How to use it?:
```JavaScript
// Plug in the module.
const { Key, Cipher } = require('dorami');
// Declare variables.
// Important! For optimization, declare variables only once.
const key = new Key(),
  cipher = new Cipher();
// Adding a key.
key.add('RND', 'First key');
// Encrypt the text.
const cript = cipher.cript('First key', 'Hello world!');
console.log(cript);
// Decoding the text.
console.log(cipher.uncript(0, cript);
```
Full information in the file: **FULL.md**.

- [**# My discord server!**](https://discord.gg/d4rKqZs)
