import { Snippet } from "./models";

export class Story {
    public static start: Snippet = {
        id: "start",
        options: [
            "Reach for your face - what's obstructing your vision?", //
            "Try to recall your latest memory"
        ],
        text: "*Drip… Drip… Drip…*\nYou awake to the steady sound of droplets landing in a pool of liquid close by. Though you open your eyes, you cannot seem to see anything. What do you do?"
    }
    public static path0: Snippet = {
        id: "path0",
        options: [
            "Stomp & kick out of frustration", //
            "Deep breaths - assess your situation"
        ],
        text: "Try as you might, you can't reach your face. Your hands don't feel anything aside from what's beneath them - hard wood. Ouch! A splinter entered each of your index fingers! Now what?"
    }
    public static path00: Snippet = {
        id: "path00",
        options: [
            "Rock forward", // death
            "Rock backward",
            "Rock left",
            "Rock right"
        ],
        text: "You find your feet are bare as your left foot splashes in a puddle and your right foot feels... is that sand? All this movement causes the chair you're in to rock a bit. An idea of tipping over the chair pops in your mind. Now what?"
    }
    public static path000: Snippet = {
        id: "path000",
        options: [],
        text: "You rock back and forth until the chair hurtles forward. Unable to catch yourself, your head crashes into the floor causing you to black out. What exactly was your plan?"
    }
}
