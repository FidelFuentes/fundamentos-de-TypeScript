"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 1,
    title: 'miraesto',
    description: 'esto es una prueba'
};
var picture = {
    id: 1,
    title: 'asdasd',
    orientation: PhotoOrientation.Landscape
};
var newPicutre = {}; // es lo mismo que hacer newPicture: Picture
newPicutre.id = 2;
newPicutre.title = 'luna';
console.log('album', album);
console.log('picture', picture);
console.log('newpic', newPicutre);
