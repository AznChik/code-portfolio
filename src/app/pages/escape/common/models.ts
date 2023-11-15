import { Story } from "./constants";

export class GameVars {
    dead: boolean = false;
    gameStart: boolean = false;
    health: number = 5;
    modalChoice: string[] = [];
    modalText: string[] = [Story.start.text];
    story: Snippet = Story.start;
}

export interface Snippet {
    id: string;
    options: string[];
    text: string;
}
