"use strict";
//<tipo> angle bracker syntax
var username;
username = 'fidel';
// tenemos una cadena, ts confia en mi
// <> nos perdmite hacer uso de lenght
/*let message: string = (<string>username).length > 6?
                        `WELCOME${username}`:
                        'user name is too short'

console.log('message', message);*/
var userbyId = 'fidelito 1';
// como obtener el username?
username = userbyId.substring(0, 8);
console.log('user name only:', username);
// syntaxis AS
var message = username.length > 4 ?
    "WELCOME" + username :
    'user name is too short';
console.log('message', message);
var helloUser;
helloUser = 'hello fidel';
username = helloUser.substring(6);
console.log(username);
