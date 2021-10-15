"use strict";
console.log('holaaa fidel');
// number
// explicito
var phone;
phone = 1;
phone = 5423123;
// phone = 'hola' error
// inferido
var phoneNumber = 54322344;
// apartir de ese moemento solo recibe valores numericos
var hex = 0xf00d;
var binary = 85;
var octal = 5349;
// estos valores pueden ser usados a partir de es6
// tipo: boolean
//tipado explicito
var isPro;
isPro = true;
//iferido
var isUserPro = false;
isUserPro = true;
// no le podria poner un valor numerico, seria error
// tipo string
//explicito
var userName = 'fidel';
userName = "luis";
// template string es6
// uso de back-tick
var userInfo;
userInfo = "\n    User info:\n    username: " + userName + "\n    firstName:" + (userName + 'fuentes') + "\n    phone: " + phone + "\n    isPro:" + isUserPro + "\n";
console.log('userInfo', userInfo);
