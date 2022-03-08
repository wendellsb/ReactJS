interface Game {
    id?: string | number;
    title: string;
    description: string;
    readonly genre: string;
    plataform?: string[];
    getSimilars?: (title:string) => void;
}

const tlou: Game ={
    id: 123,
    title: "The Last Of Us",
    description: "The best game in the world",
    genre: "Action",
    plataform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A plague Tale, Metro`);
    },
};

console.log(tlou.genre);
if(tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const leftbehind: DLC = { 
    title: "The Last of US - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    plataform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"],
};

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;

    constructor(t: string, d: string, g: string) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}