"use strict";
// corchetes []
// tipo explicito
var users;
users = ['fidel', 'lucas', 'rodrigo'];
// inferido
var otherUser = ['fidellll', 'lucassss'];
//array <tipo>
var pictureTitles;
pictureTitles = ['favorite sunset', 'vacation'];
// acceder a los valores de array
console.log('first user', users[0]);
console.log(pictureTitles[1]);
// propiedades en array
console.log(users.length);
// uso de funciones en arreglos
users.push('otro fidel');
users.sort();
console.log(users);