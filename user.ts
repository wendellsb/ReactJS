//accountInfo
//charInfo
//PlayerInfo

type AccountInfo = {
    id: number | string;
    name: string;
    email?: string; // passa a ser opicional com o "?"
}

const account: AccountInfo = {
    id: 123,
    name: "Willian",
   
}

type CharInfo = {
    nickname: string;
    level: number
}

const charInfo = {
    nickname: "willjusten",
    level: 100
}

//intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: "123",
    name: "willian",
    nickname: "willjusten",
    level: 100
}