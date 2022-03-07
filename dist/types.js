"use strict";
// boolean (true/false)
let isOpen;
isOpen = true;
//string ('foo', "foo", `foo`)
let message;
message = 'foo ${isOpen}';
//number (int, float hex, binary)
let total;
total = 20;
// array (type[])
let items;
items = [1, 2, 3];
let items2;
items2 = ["foo", "bar"];
let totalA;
totalA = [1, 2, 3];
// tuple
let title;
title = [1, "foo"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) não é legal!
let coisa;
coisa = [1];
// void (vazio)
function logger() {
    console.log('foo');
}
//never
function error() {
    throw new Error("error");
}
// Object
let cart;
cart = {
    key: "fi"
};
// type inference
let message2 = "mensagem definida";
message2 = "43";
window.addEventListener("click", (e) => {
    console.log(e.target);
});
