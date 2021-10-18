"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// las clases las separamas con ;
// superclase herencia
// protected es intermedio entre publico y privado
// abstract nos prohibe crear un nuevo objeto a partir de la clase
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    /*set id(id:number){
      this._id=id
    }*/
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
// get y set
class Picture extends Item {
    // no tiene sentido poner el constructo como privado
    constructor(id, title, orientation) {
        //this._id= id;
        //this._title=title;
        super(id, title);
        this._orientation = orientation;
    }
    // get y set
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    // comportamiento
    toString() {
        return `[id:${this.id}, title:${this.title}, orientation: ${this.orientation}]`;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title); // constructor de superclase
        this._pictures = [];
    }
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
const album = new Album(1, 'personal pictures');
const picture = new Picture(1, 'platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
// accediendo a los miembros publico
//picture.id = 100;
picture.title = 'another title';
album.title = 'personal activities';
console.log(album);
// 
//const item = new Item(1,'nuevo objeto')
//console.log('el item es' ,item)
// probar el miembro static de la clase picture
console.log('photoorientation', Picture.photoOrientation.Landscape);
