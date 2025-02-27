function processSentence(name,age,address,hobby) {
return `Nama saya ${name}, umur saya ${age}, alamat saya ${address}, dan saya punya  hoby yaitu ${hobby}`
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence)