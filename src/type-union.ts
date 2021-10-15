// debe soportar usuarios numericos y strings
export{}
/* let idUser: number| string;
idUser = 10;
idUser = 'asd';


// buscar username dado id

function getUserNameById(id: number|string){
    //logica de negocio

    return 'fidelfuentes'
}

getUserNameById(20);
getUserNameById('20'); */

// alias de tipo ts

type Iduser = number | string;
type username = string;
let idUser: Iduser;
idUser = 10;
idUser = '10';


// buscar username dado id

function getUserNameById(id: Iduser) : username{
    //logica de negocio

    return 'fidelfuentes';
}

getUserNameById(20);
getUserNameById('20');

// tipos literales

type SquareSize = '100*100' | '500*500' | '1000*1000';

let smallPicture: SquareSize= '100*100'

let mediumPicture: SquareSize='500*500';

