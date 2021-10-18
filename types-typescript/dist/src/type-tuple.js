"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user;
user = [1, 'fidel'];
console.log(user);
console.log('username', user[1].length);
console.log(user[0]);
// tuplas con varios valores
//id, username, boolean  los tipos deben ser diferentes idealmente
let userInfo;
userInfo = [2, 'fidel', true];
console.log(userInfo);
// arreglo de tuplas
let array = []; // =[] inicializo el arreglo
array.push([1, 'lalal']);
array.push([1, 'fidel']);
array.push([1, 'marcos']);
// uso de funciones de array
// modificar el usario
array[2][1] = array[2][1].concat('001');
console.log(array);
