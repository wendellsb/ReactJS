/*
// Interfaces
// definição
interface Game {
    title: string;
}

interface DLC {
    extra: string;
}

// interseção / extend
interface GameCollection extends Game, DLC {}

// implements
//lass CreateGame implements GameCopllection {}

interface getSimilars {
    (title: string): void;
}

// ========= Diferenças ========== //
//interface ID extends number {}

//nao consegue definir tuplas na interfaces
interface Tuple {
    0: number;
    1: number;
}
[1, 2, 3] as Tuple;

// Pode ter multiplas declarações e ele une de mesmo nome
interface JQuery {
    a: string;
}

interface JQuery {
    b: string;
}

const $: JQuery = {
    a: "bla",
    b: "foo",
};

// vantagem:  quando estiver criando libs, prefira Interfaces, porque são mais extensiveis!

// criando objetos/classes (POO)
*/