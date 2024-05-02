/* console.log("Funciona!!!!!");

window.console.log("Pelo window");
console.log(window.location.href);
console.log(window.navigator.language);
console.log(window.navigator.platform);
console.log(window.navigator.userAgent);

console.log(window.screen.width);
console.log(window.screen.height); */

console.log(document);
console.log(document.head);
console.log(document.body);

console.log(document.body.children);

let titulo = document.body.children[0];
console.log(titulo);

let lista = document.body.children[1];
console.log(lista);

console.log(lista.firstElementChild);
console.log(lista.lastElementChild);
console.log(lista.parentElement);

console.log(document.getElementById("listinha"));
console.log(document.getElementById("Item01"));

console.log(document.querySelectorAll(".ordenada"));
console.log(document.querySelectorAll("#Item01")); 
