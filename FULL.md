<a name="Start"></a> 
# Navigation.
- Class Key - [add](#Add), [del](#Del), [has](#Has), [get](#Get), [info](#Info).
- Class Cipher - [cript](#Cript), [uncript](#Uncript), [info](#CipherInfo).

<a name="Add"></a> 
## 
Adding a key to the key database with a free number and/or name.
###### You cannot enter a key and/or key name that is already written.
```JavaScript
new Key().add("Key or RND", "Key name(optional)");
```
<a name="Del"></a> 
## Deleting a key.
```JavaScript
new Key().del("Either the key name, or the key number, or the key itself.");
```
<a name="Has"></a> 
## Checking for the existence of a key.
###### Returns true or false.
```JavaScript
new Key().has("Either the key name, or the key number, or the key itself.");
```
<a name="Get"></a> 
## Key search.
###### Returns an object with parameters, otherwise null.
```JavaScript
new Key().get("Either the key name, or the key number, or the key itself.");
```
```JavaScript
{
    key: "Key",
    name: "Key name", // If there is a key name*
    size: "The length of the key and the name"
}
```
<a name="Info"></a> 
## Information about all keys.
###### Returned object.
```JavaScript
new Key().info();
```
```JavaScript
{
    size: "Length of all keys and their names",
    elements: "Returns the number of keys"
}
```
<a name="Cript"></a> 
## Encryption of a string.
###### Returns an encrypted string or a broken string, if you pass the key it may not be written to the database.
```JavaScript
new Cipher().cript("Either the key name, or the key number, or the key itself.", "String");
```
<a name="Uncript"></a> 
## Decrypt the string.
###### Returns the decrypted string.
```JavaScript
new Cipher().uncript("Either the key name, or the key number, or the key itself.", "String");
```
<a name="CipherInfo"></a> 
## Information about ...
###### Returned object.
```JavaScript
new Cipher().info();
```
```JavaScript
{
    size: "The size of the cipher originally",
    supsymbols: "Array with supported characters",
    bruteshield: "Number of available key variations",
    version: "The version of the cipher"
}
```
[Go back to the beginning.](#Start)  
