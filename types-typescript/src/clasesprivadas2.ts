export{}
// a partir de la version 3.8 #
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}
// las clases las separamas con ;
class Picture {
    // propiedades 

    #id: number;
    #title:string;
    #orientation: PhotoOrientation
// no tiene sentido poner el constructo como privado
    public constructor(
        id: number,
        title:string,
        orientation:PhotoOrientation){
     this.#id= id;
     this.#title=title;
     this.#orientation=orientation;         
          }
          // comportamiento
    public toString(){

        return `[id:${this.#id}, title:${this.#title}, orientation: ${this.#orientation}]`
    
        }
}

class Album {
    #id:number;
    #title:string;
    #pictures: Picture[];

    public constructor(id:number,title:string,){
        this.#id= id;
        this.#title=title;
        this.#pictures=[];
        
    }

    public addPicture(picture: Picture){
        this.#pictures.push(picture)
    }
}

const album: Album= new Album(1,'personal pictures');
const picture: Picture = new Picture(1,'platzi session',PhotoOrientation.Square)
album.addPicture(picture)

console.log('album', album);

// accediendo a los miembros publico

// el # es mas privado que el keyword private