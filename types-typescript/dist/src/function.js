"use strict";
// funcion para crear foto
// usamos ts, definimos tipos para parametros
/*function createPicture(title:string, date:string, size:SquareSize){

    // se crea la foto

    console.log('create picture using', title,date,size)

}

createPicture('Mi cumple', '2020-03-10','1000*1000')

createPicture('colombia', '2020-03-01')*/
// parametros opcionales en funciones , permiten el paso de diferentes valores
// el signo ? dice que los parametros son opcionales
function createPicture(title, date, size) {
    // se crea la foto
    console.log('create picture using', title, date, size);
}
createPicture('colombia', '2020-03-01');
// flat array function es6
let createPic = (title, date, size) => {
    return {
        title,
        date,
        size
    };
};
const picture = createPic('mi foto', '2020-03-10', '100*100');
console.log('picture', picture);
// tipo de retorno con ts
function handleError1(code, message) {
    // procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error(`${message}. code error:${code}`);
    }
    else {
        return ' an error has ocurred';
    }
}
try {
    let result = handleError(200, 'okay'); // string
    console.log(result);
    result = handleError(404, 'error'); // never
    console.log(result);
}
catch (error) {
}
