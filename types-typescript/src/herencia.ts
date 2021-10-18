
export{}



enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}
// uso de herencia
interface Entity{
    id:number,
    title:string,
}

interface Album extends Entity{ 
    // copia de los atributos de entity
    description: string

}

interface Picture extends Entity{
   
    orientation:PhotoOrientation
}

const album: Album={
    id:1,
    title:'miraesto',
    description:'esto es una prueba'
}

const picture: Picture = {
    id:1,
    title:'asdasd',
    orientation:PhotoOrientation.Landscape


};


let newPicutre ={} as Picture; // es lo mismo que hacer newPicture: Picture

newPicutre.id = 2
newPicutre.title ='luna'

console.log('album',album)
console.log('picture', picture)
console.log('newpic',newPicutre)