"use strict";
//import { Album, PhotoOrientation, Picture, User } from "./photo-app";
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./album");
const Photo_orientation_1 = require("./Photo-orientation");
const picture_1 = require("./picture");
const user_1 = require("./user");
const user = new user_1.User(1, 'fidelin', 'fidel', true);
const album = new album_1.Album(10, 'platzi pictures');
const picture = new picture_1.Picture(1, 'typescript-course', '2020-03', Photo_orientation_1.PhotoOrientation.Landscape);
// creamos relaciones entre los objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
user.removeAlbum(album);
console.log('usert', user);
