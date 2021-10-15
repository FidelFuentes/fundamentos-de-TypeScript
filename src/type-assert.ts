//<tipo> angle bracker syntax

let username: any;

username= 'fidel'

// tenemos una cadena, ts confia en mi
// <> nos perdmite hacer uso de lenght

/*let message: string = (<string>username).length > 6? 
                        `WELCOME${username}`:
                        'user name is too short'

console.log('message', message);*/

let userbyId: any = 'fidelito 1';
// como obtener el username?
username= (<string>userbyId).substring(0,8)
console.log('user name only:', username);

// syntaxis AS


 let message= (username as string ).length > 4? 
                        `WELCOME${username}`:
                        'user name is too short'
console.log('message', message);

let helloUser: any;
helloUser= 'hello fidel';
username= (helloUser as string).substring(6)
console.log(username)
