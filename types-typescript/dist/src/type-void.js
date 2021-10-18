"use strict";
// void opuesto a any representa la ausencia de valor de retorno 
// tipo explicito
function showInfo(user) {
    console.log('user info', user.id, user.name, user.firstName);
    //return 'hola';
}
showInfo({ id: 1, name: 'fidel', firstName: 'luis' });
// inferido
function showFormate(user) {
    console.log('user info : ', `
    id:${user.id}
    username:${user.name}
    firsName:${user.firstName}
    `);
}
showFormate({ id: 1, name: 'fidel', firstName: 'luis' });
//tipo void, como tipo de dato en variable
let unusable;
//unusable= null;
unusable = undefined;
// tipo never
// tipo de valor que nunca ocurre
function handleError(code, message) {
    // procesamiento del codigo
    // generamos un mensaje
    throw new Error(`${message}. code: ${code} `);
}
try {
    handleError(404, 'not found');
}
catch (error) {
}
// bucle infinito
function sumNumbers(limite) {
    let sum = 0;
    while (true) {
        sum++;
    }
    //nunca estamos retornando la suma
}
sumNumbers(10);
