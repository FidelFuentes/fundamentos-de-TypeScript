"use strict";
// any , capturar valores dinamicos , como ultimo recurso debe usarse
// tipo explicito
var idUser;
idUser = 1; //number
idUser = true;
idUser = 'soy string';
console.log(idUser);
//any   se acerca a lo que era antes var
var otherId;
otherId = 1;
otherId = 'asdasdasd';
console.log(otherId);
var surprice = '123456789';
// 
var res = surprice.substring(6);
console.log(res);
// void es lo opuesto a any
