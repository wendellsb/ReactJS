"use strict";
//readonly
const todo = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false,
};
console.log(todo);
//todo.completed = true;
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
const todo3 = {
    title: "Fechar ghost od Tsushima",
    completed: false,
};
const todo4 = {
    title: "Fechar ghost od Tsushima",
    completed: false,
};
