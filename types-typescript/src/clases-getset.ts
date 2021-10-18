export{}

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}
// las clases las separamas con ;


// get y set
class Picture {
    // propiedades 

    private _id: number;
    private _title:string;
    private _orientation: PhotoOrientation
// no tiene sentido poner el constructo como privado
    public constructor(
        id: number,
        title:string,
        orientation:PhotoOrientation){
     this._id= id;
     this._title=title;
     this._orientation=orientation;         
          }

          // get y set
          get id(){
              return this._id
          }
          
          set id(id:number){
            this._id=id
          }

          get title(){
              return this._title
          }

          set title(title:string){
              this._title=title;
          }
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

class Album {
    private _id:number;
    private _title:string;
    private _pictures: Picture[];

    public constructor(id:number,title:string,){
        this._id= id;
        this._title=title;
        this._pictures=[];
        
    }

    get id(){
        return this._id
    }
    set id(id:number){
        this._id=id;
    }

    get title(){
        return this._title
    }
    set title(title:string){
        this._title=title
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

