// function hitung(angka1, angka2) {


//     connsole.log(hitung(1, 2));
// }

// fuction munculAngka() {
//     return 2;
// }

// var tampungdata = munculAngka();
// console.log(tampungdata);



// // tambah
// function tambahkanangka(angka) {
//     return angka + 1
// }

// var tampung = tambahkanangka(2);
// console.log(tampung)


// // pengiriman parameter lebih dat=ri satu

// function helo(angka1, angka2) {
//     return angka1 + angka2;
// }

// console.log(helo(1, 2));


// // inisialisasi dengan default

// function tambahlagi(angka1 = 3) {
//     return angka1;
// }

// console.log(tambahlagi(5));
// console.log(tambahlagi());


// let helloworld = function (ang1, ang2) {
//     return angka1 + angka2
// }

// console.log(helloworld(1, 3));



// array



// var animals = ["Lion", "Tiger", "Puma"];


// animals.push("meong");
// console.log(animals);


// animals.slice('0,2')
// console.log(animals)


// animals.pop()
// console.log(animals)


// let arr = [6, 5, 4, 8, 9, 10]
// arr.unshift(3)
// console.log(arr)



// arr.shift()
// console.log(arr)

// arr.sort()
// console.log(arr)


// var arrChar = ['Tono', 'Budi', 'Charlie', 'Ahmad'];
// arrChar.sort();
// console.log(arrChar);

// var arrChar = ['Tono', 'Budi', 'Charlie', 'Ahmad'];

// var arr = [1, 2, 15];
// arr.sort(function (value1, value2) {
//     return value1 < value2
// });
// console.log(arr);



// var arr = [1, 2, 3, 4, 5, 6, 7];

// var irisan1 = arr.slice(1, 2);
// console.log(irisan1)
// var irisan2 = arr.slice(1);
// console.log(irisan2);
// var irisan3 = arr.slice(2, 3);
// console.log(irisan3);
// var irisan4 = arr.slice(2, 2)
// console.log(irisan4)


// var book = ["hp", "hello", "mama", "papa"]

// book.splice(2, 0, "kotol")
// console.log(book)
// book.splice(0, 2)
// console.log(book)
// book.splice(0, 1, "bakar", "kolok")
// console.log(book)


// var element = "avatar mengendalikan element air bumi api dan udara"


// var kata = element.split(" ")
// console.log(kata)




var supermanObj = {
    id: "1a2b3c",
    name: "Superman",
    age: 200,
    favorites: [
        "coding",
        "reading",
        {
            sports: ["parkour", "hill climbing"]
        }
    ],
    address: {
        street: "Planet Krypton",
        zipCode: 54213
    }
};

console.log(supermanObj)