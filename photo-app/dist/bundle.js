(()=>{"use strict";var e={405:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.PhotoOrientation=void 0,(i=t.PhotoOrientation||(t.PhotoOrientation={}))[i.Landscape=0]="Landscape",i[i.Portrait=1]="Portrait",i[i.Square=2]="Square",i[i.Panorama=3]="Panorama"},987:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Album=void 0;const r=i(123);class s extends r.Item{constructor(e,t){super(e,t),this.pictures=[]}addPicture(e){this.pictures.push(e)}}t.Album=s},123:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0,t.Item=class{constructor(e,t){this.id=e,this.title=t}}},449:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Picture=void 0;const r=i(123);class s extends r.Item{constructor(e,t,i,r){super(e,t),this._date=i,this._orientation=r}toString(){return`[id: ${this.id},\n                 title: ${this.title},\n                 orientation: ${this._orientation}]`}}t.Picture=s},536:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0,t.User=class{constructor(e,t,i,r){this.id=e,this.username=t,this.firstName=i,this.isPro=r,this.album=[]}addAlbum(e){this.album.push(e)}removeAlbum(e){const t=this.album.findIndex((t=>t.id===e.id));let i;return t>=0&&(i=this.album[t],this.album.splice(t,1)),i}}}},t={};function i(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,i),o.exports}(()=>{const e=i(987),t=i(405),r=i(449),s=new(i(536).User)(1,"fidelin","fidel",!0),o=new e.Album(10,"platzi pictures"),n=new r.Picture(1,"typescript-course","2020-03",t.PhotoOrientation.Landscape);s.addAlbum(o),o.addPicture(n),console.log("user",s),s.removeAlbum(o),console.log("usert",s)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksUUFBU0gsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy9QaG90by1vcmllbnRhdGlvbi50cyIsIndlYnBhY2s6Ly9waG90by1hcHAvLi9zcmMvYWxidW0udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL3BpY3R1cmUudHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL3VzZXIudHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QaG90b09yaWVudGF0aW9uID0gdm9pZCAwO1xudmFyIFBob3RvT3JpZW50YXRpb247XG4oZnVuY3Rpb24gKFBob3RvT3JpZW50YXRpb24pIHtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJMYW5kc2NhcGVcIl0gPSAwXSA9IFwiTGFuZHNjYXBlXCI7XG4gICAgUGhvdG9PcmllbnRhdGlvbltQaG90b09yaWVudGF0aW9uW1wiUG9ydHJhaXRcIl0gPSAxXSA9IFwiUG9ydHJhaXRcIjtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJTcXVhcmVcIl0gPSAyXSA9IFwiU3F1YXJlXCI7XG4gICAgUGhvdG9PcmllbnRhdGlvbltQaG90b09yaWVudGF0aW9uW1wiUGFub3JhbWFcIl0gPSAzXSA9IFwiUGFub3JhbWFcIjtcbn0pKFBob3RvT3JpZW50YXRpb24gPSBleHBvcnRzLlBob3RvT3JpZW50YXRpb24gfHwgKGV4cG9ydHMuUGhvdG9PcmllbnRhdGlvbiA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWxidW0gPSB2b2lkIDA7XG5jb25zdCBpdGVtXzEgPSByZXF1aXJlKFwiLi9pdGVtXCIpO1xuY2xhc3MgQWxidW0gZXh0ZW5kcyBpdGVtXzEuSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlKSB7XG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XG4gICAgICAgIHRoaXMucGljdHVyZXMgPSBbXTtcbiAgICB9XG4gICAgYWRkUGljdHVyZShwaWN0dXJlKSB7XG4gICAgICAgIHRoaXMucGljdHVyZXMucHVzaChwaWN0dXJlKTtcbiAgICB9XG59XG5leHBvcnRzLkFsYnVtID0gQWxidW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSXRlbSA9IHZvaWQgMDtcbmNsYXNzIEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG59XG5leHBvcnRzLkl0ZW0gPSBJdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBpY3R1cmUgPSB2b2lkIDA7XG5jb25zdCBpdGVtXzEgPSByZXF1aXJlKFwiLi9pdGVtXCIpO1xuY2xhc3MgUGljdHVyZSBleHRlbmRzIGl0ZW1fMS5JdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIF9kYXRlLCBfb3JpZW50YXRpb24pIHtcbiAgICAgICAgc3VwZXIoaWQsIHRpdGxlKTtcbiAgICAgICAgdGhpcy5fZGF0ZSA9IF9kYXRlO1xuICAgICAgICB0aGlzLl9vcmllbnRhdGlvbiA9IF9vcmllbnRhdGlvbjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgW2lkOiAke3RoaXMuaWR9LFxuICAgICAgICAgICAgICAgICB0aXRsZTogJHt0aGlzLnRpdGxlfSxcbiAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246ICR7dGhpcy5fb3JpZW50YXRpb259XWA7XG4gICAgfVxufVxuZXhwb3J0cy5QaWN0dXJlID0gUGljdHVyZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Vc2VyID0gdm9pZCAwO1xuY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IoaWQsIHVzZXJuYW1lLCBmaXJzdE5hbWUsIGlzUHJvKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5pc1BybyA9IGlzUHJvO1xuICAgICAgICB0aGlzLmFsYnVtID0gW107XG4gICAgfVxuICAgIGFkZEFsYnVtKGFsYnVtKSB7XG4gICAgICAgIHRoaXMuYWxidW0ucHVzaChhbGJ1bSk7XG4gICAgfVxuICAgIHJlbW92ZUFsYnVtKGFsYnVtKSB7XG4gICAgICAgIC8vYnVzY2FyIGFsYnVtXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGJ1bS5maW5kSW5kZXgoYSA9PiBhLmlkID09PSBhbGJ1bS5pZCk7XG4gICAgICAgIGxldCBkZWxldGVkQWxidW07XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBkZWxldGVkQWxidW0gPSB0aGlzLmFsYnVtW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuYWxidW0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVsZXRlZEFsYnVtO1xuICAgIH1cbn1cbmV4cG9ydHMuVXNlciA9IFVzZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL2ltcG9ydCB7IEFsYnVtLCBQaG90b09yaWVudGF0aW9uLCBQaWN0dXJlLCBVc2VyIH0gZnJvbSBcIi4vcGhvdG8tYXBwXCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhbGJ1bV8xID0gcmVxdWlyZShcIi4vYWxidW1cIik7XG5jb25zdCBQaG90b19vcmllbnRhdGlvbl8xID0gcmVxdWlyZShcIi4vUGhvdG8tb3JpZW50YXRpb25cIik7XG5jb25zdCBwaWN0dXJlXzEgPSByZXF1aXJlKFwiLi9waWN0dXJlXCIpO1xuY29uc3QgdXNlcl8xID0gcmVxdWlyZShcIi4vdXNlclwiKTtcbmNvbnN0IHVzZXIgPSBuZXcgdXNlcl8xLlVzZXIoMSwgJ2ZpZGVsaW4nLCAnZmlkZWwnLCB0cnVlKTtcbmNvbnN0IGFsYnVtID0gbmV3IGFsYnVtXzEuQWxidW0oMTAsICdwbGF0emkgcGljdHVyZXMnKTtcbmNvbnN0IHBpY3R1cmUgPSBuZXcgcGljdHVyZV8xLlBpY3R1cmUoMSwgJ3R5cGVzY3JpcHQtY291cnNlJywgJzIwMjAtMDMnLCBQaG90b19vcmllbnRhdGlvbl8xLlBob3RvT3JpZW50YXRpb24uTGFuZHNjYXBlKTtcbi8vIGNyZWFtb3MgcmVsYWNpb25lcyBlbnRyZSBsb3Mgb2JqZXRvc1xudXNlci5hZGRBbGJ1bShhbGJ1bSk7XG5hbGJ1bS5hZGRQaWN0dXJlKHBpY3R1cmUpO1xuY29uc29sZS5sb2coJ3VzZXInLCB1c2VyKTtcbnVzZXIucmVtb3ZlQWxidW0oYWxidW0pO1xuY29uc29sZS5sb2coJ3VzZXJ0JywgdXNlcik7XG4iXSwibmFtZXMiOlsiUGhvdG9PcmllbnRhdGlvbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQWxidW0iLCJpdGVtXzEiLCJJdGVtIiwiY29uc3RydWN0b3IiLCJpZCIsInRpdGxlIiwic3VwZXIiLCJ0aGlzIiwicGljdHVyZXMiLCJhZGRQaWN0dXJlIiwicGljdHVyZSIsInB1c2giLCJQaWN0dXJlIiwiX2RhdGUiLCJfb3JpZW50YXRpb24iLCJ0b1N0cmluZyIsIlVzZXIiLCJ1c2VybmFtZSIsImZpcnN0TmFtZSIsImlzUHJvIiwiYWxidW0iLCJhZGRBbGJ1bSIsInJlbW92ZUFsYnVtIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJhIiwiZGVsZXRlZEFsYnVtIiwic3BsaWNlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImFsYnVtXzEiLCJQaG90b19vcmllbnRhdGlvbl8xIiwicGljdHVyZV8xIiwidXNlciIsIkxhbmRzY2FwZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9