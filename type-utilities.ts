type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

//readonly
const todo: Readonly<Todo> = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false,
};

console.log(todo);

//todo.completed = true;

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate}
}

const todo2: Todo = updateTodo(todo, {completed: true})

console.log(todo2);

//Pick se quiser pegar muitas coisas dentro de um objeto
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Fechar ghost od Tsushima",
    completed: false,
}

//Omit para esconder poucas coisas dentro de um objeto
type TodoPreview2 = Omit<Todo, "description">
const todo4: TodoPreview = {
    title: "Fechar ghost od Tsushima",
    completed: false,
}