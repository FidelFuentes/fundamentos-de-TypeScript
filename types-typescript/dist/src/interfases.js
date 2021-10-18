"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicute(picture) {
    console.log(`[title:${picture.title}, 
    date: ${picture.date},
    orientation:${picture.orientation}]`);
}
let myPicture = {
    title: 'test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicute(myPicture);
showPicute({
    title: 'test title',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    //extra:'test' // error
});
function generatePicture(config) {
    const pic = { title: 'default', date: '2020' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log(picture);
picture = generatePicture({ title: 'travel pic' });
console.log(picture);
let user;
user = {
    id: 10,
    username: 'fidel',
    isPro: true
};
console.log(user);
user.username = 'fidelito';
console.log(user);
//user.id= 20 // no se puede por que es de solo lectura
