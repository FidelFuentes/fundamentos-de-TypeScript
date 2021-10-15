console.log('holaaa fidel');

// number
// explicito

let phone: number;
phone = 1;
phone= 5423123;
// phone = 'hola' error


// inferido

let phoneNumber = 54322344;

// apartir de ese moemento solo recibe valores numericos

let hex: number =0xf00d;

let binary: number= 0b1010101;

let octal:number= 0o12345;


// estos valores pueden ser usados a partir de es6


// tipo: boolean
//tipado explicito

let isPro:boolean;

isPro= true;

//iferido
let isUserPro = false;
isUserPro=true;

// no le podria poner un valor numerico, seria error

// tipo string
//explicito

let userName:string='fidel';
userName="luis";


// template string es6

// uso de back-tick

let userInfo:string;
userInfo=`
    User info:
    username: ${userName}
    firstName:${userName + 'fuentes'}
    phone: ${phone}
    isPro:${isUserPro}
`;

console.log('userInfo', userInfo);




