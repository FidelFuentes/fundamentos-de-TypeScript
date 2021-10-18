// type object

let user: object;
user={}; // de la clase Object

user={
    id:1,
    userName:'fidelin',
    isPro:true
};

console.log(user);

// caracteristicas
// el tipo no se puede acceder a las propiedades del objecto , es la diferencia a object con minuscula a la clase Object

//  object vs Object (clase js vs ts)



const myObject={
    id:1,
    userName:'fidelin',
    isPro:true
};

// instanciamos la clase

const instance = myObject instanceof Object; // clase obj de js
console.log(instance);
console.log('user.username', myObject.userName);