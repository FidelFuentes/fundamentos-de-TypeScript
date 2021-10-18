export{}

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}
// las clases las separamas con ;


// superclase herencia

// protected es intermedio entre publico y privado
// abstract nos prohibe crear un nuevo objeto a partir de la clase
abstract class Item{
    protected readonly _id:number;
    protected _title:string;
    constructor(id:number,title:string){
        this._id=id;
        this._title=title;
    }
    get id(){
        return this._id
    }
    
    /*set id(id:number){
      this._id=id
    }*/

    get title(){
        return this._title
    }

    set title(title:string){
        this._title=title;
    }
}

// get y set
class Picture extends Item{

    public static photoOrientation= PhotoOrientation;
    // propiedades 

    
    private _orientation: PhotoOrientation
// no tiene sentido poner el constructo como privado
    public constructor(
        id: number,
        title:string,
        orientation:PhotoOrientation){
     //this._id= id;
     //this._title=title;
     super(id,title)
     this._orientation=orientation;         
          }

          // get y set
          
          get orientation(){
              return this._orientation;
          }
          set orientation(orientation:PhotoOrientation){
              this._orientation=orientation;
          }

          // comportamiento
    public toString(){

        return `[id:${this.id}, title:${this.title}, orientation: ${this.orientation}]`
    
        }
}

class Album extends Item{
   
    private _pictures: Picture[];

    public constructor(id:number,title:string,){
        super(id,title); // constructor de superclase
        this._pictures=[];
        
    }

    

    public addPicture(picture: Picture){
        this._pictures.push(picture)
    }
}

const album: Album= new Album(1,'personal pictures');
const picture: Picture = new Picture(1,'platzi session',PhotoOrientation.Square)
album.addPicture(picture)

console.log('album', album);

// accediendo a los miembros publico


//picture.id = 100;
picture.title = 'another title';

album.title = 'personal activities';
console.log(album)

// 

//const item = new Item(1,'nuevo objeto')
//console.log('el item es' ,item)

// probar el miembro static de la clase picture

console.log('photoorientation', Picture.photoOrientation.Landscape)