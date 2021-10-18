// funcion para mostrar una fotografia
export{} // separo el contexto de los archivos anteriores con el del archivo actual
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

//definimos interface

interface Picture{
    title:string,
    date:string,
    orientation:PhotoOrientation
}

function showPicute(picture: Picture){

console.log(`[title:${picture.title}, 
    date: ${picture.date},
    orientation:${picture.orientation}]`)
}

let myPicture ={
    title:'test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};

showPicute(myPicture);



showPicute({
    title: 'test title',
    date:'2020-03',
    orientation:PhotoOrientation.Portrait,
    //extra:'test' // error
})

interface PictureConfig{
    title?: string,
    date?: string,
    orientation?:PhotoOrientation
}

function generatePicture(config:PictureConfig){
    const pic={title:'default',date:'2020'}
    if(config.title){
        pic.title=config.title
    }
    if(config.date){
        pic.date=config.date;
    }

    return pic;
}

let picture= generatePicture({});
console.log(picture)

picture=generatePicture({title:'travel pic'})
console.log(picture)

// readonly no puede ser modificado

// interfaz de usario

interface User{
    readonly id: number,
    username:string,
    isPro: boolean
}

let user: User;

user= {
    id: 10,
    username:'fidel',
    isPro:true
}

console.log(user)

user.username= 'fidelito'
console.log(user)

//user.id= 20 // no se puede por que es de solo lectura

