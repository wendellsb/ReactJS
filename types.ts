// boolean (true/false)
let isOpen: boolean
isOpen = true

//string ('foo', "foo", `foo`)
let message:string
message = 'foo ${isOpen}'

//number (int, float hex, binary)
let total: number
total = 20

// array (type[])
let items: number[]
items = [1, 2, 3]

let items2: string[]
items2 = ["foo", "bar"]

let totalA: Array<number>
totalA = [1, 2, 3]

// tuple
let title: [number, string];
title= [1 , "foo"];

// enum
enum Colors {
    white = '#fff',
    black = '#000',
}

// any (qualquer coisa) não é legal!
let coisa: any;
coisa = [1];

// void (vazio)
function logger():void {
    console.log('foo');
}

// null / undefined
type Bla = string | undefined

//never
function error(): never {
    throw new Error("error");
}

// Object
let cart: object;
cart = {
    key:"fi"
}

// type inference
let message2 = "mensagem definida"
message2 = "43"

window.addEventListener("click", (e: MouseEvent) => {
    console.log(e.target);
})