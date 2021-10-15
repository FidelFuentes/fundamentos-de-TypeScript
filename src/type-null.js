// explicita
var nullVariable;
nullVariable = null; // solo va a aceptar ese valor
var otherVariable = null;
otherVariable = 'test';
console.log(nullVariable, otherVariable);
// undefinded
var undefindedVariable = undefined;
undefindedVariable = undefined; // si toma null nada mas
var otherVariableUndefinder = undefined;
otherVariableUndefinder = 1;
console.log(undefindedVariable, otherVariableUndefinder);
// null y undefinded como subtipos
// stricnullchecks
var albumName;
albumName = null;
albumName = undefined;
