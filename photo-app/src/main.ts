//import { Album, PhotoOrientation, Picture, User } from "./photo-app";

import { Album } from "./album";
import { PhotoOrientation } from "./Photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";



const user = new User(1, 'fidelin','fidel',true);

const album = new Album(10,'platzi pictures');

const picture = new Picture(1, 'typescript-course','2020-03',PhotoOrientation.Landscape)

// creamos relaciones entre los objetos

user.addAlbum(album);

album.addPicture(picture);
console.log('user',user)

user.removeAlbum(album)
console.log('usert',user)