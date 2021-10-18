"use strict";
// corchetes []
// tipo explicito
let users;
users = ['fidel', 'lucas', 'rodrigo'];
// inferido
let otherUser = ['fidellll', 'lucassss'];
//array <tipo>
let pictureTitles;
pictureTitles = ['favorite sunset', 'vacation'];
// acceder a los valores de array
console.log('first user', users[0]);
console.log(pictureTitles[1]);
// propiedades en array
console.log(users.length);
// uso de funciones en arreglos
users.push('otro fidel');
users.sort(); // ordena de fabrica alfabeticamente
console.log(users);
//
