// explicita

let nullVariable:null;

nullVariable= null; // solo va a aceptar ese valor

let otherVariable= null;
otherVariable= 'test';

console.log(nullVariable,otherVariable);

// undefinded

let undefindedVariable : undefined= undefined;

undefindedVariable= undefined; // si toma null nada mas

let otherVariableUndefinder= undefined;

otherVariableUndefinder= 1;

console.log(undefindedVariable,otherVariableUndefinder)


// null y undefinded como subtipos

// --stricNullChecks

let albumName: string;
/*albumName=null;
albumName=undefined;*/
