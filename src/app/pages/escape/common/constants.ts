import { Snippet } from "./models";

export class Story {
    public static start: Snippet = {
        id: "start",
        options: [
            "Reach for your face - what's obstructing your vision?", //
            "Try to recall your latest memory" // death
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
    public static path1: Snippet = {
        id: "path1",
        options: [],
        text: "" // sneak peak into why you were captured
    }
    public static path00: Snippet = {
        id: "path00",
        options: [
            "Rock forward", // death
            "Rock backward", //
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
    public static path001: Snippet = {
        id: "path001",
        options: [
            "Reach for your face - can you see now?", //
            "Give yourself a pat down, checking for any wounds" //
        ],
        text: "You rock back and forth until the chair hurtles backward. The air is knocked out of you when you collide with the floor. Shaking your head to regain your senses, you notice your vision isn't as pitch black when you stare straight up. There must be some sort of light source above you.\n\nPulling your knees up to your chest to wedge your heels between you and the seat, you push with your feet and pull with your arms, managing to break the chair! Unfortunately, you also receive a splinter in each heel. Now what?"
    }
    public static path0010: Snippet = {
        id: "path0010",
        options: [
            "Survey the room you're in. Your vision isn't 100% blocked.", //
            "Scream out in frustration - all that work for nothing!?", // death
        ],
        text: "What feels like goggles cover your eyes. When you try to remove them, you feel your skin pull. They seem to be adhered to your face! Now what?"
    }
    public static path0011: Snippet = {
        id: "path0011",
        options: [
            "Survey the room you're in. Your vision isn't 100% blocked.", //
            "Scream out in frustration - all that work for nothing!?", // death
        ],
        text: "Head... shoulders... knees... and toes. Yup, everything's accounted for with no dire injuries to report. You find you're dressed in a gown of thin material, similar to those found in hospitals. What feels like goggles cover your eyes. When you try to remove them, you feel your skin pull. They seem to be adhered to your face! Now what?"
    }
    public static path00100: Snippet = {
        id: "path00100",
        options: [
            "Make your way toward the vertical rectangle to your left",
            "Make your way toward the horizontal rectangle to your right",
            "Make your way toward the triangle ahead of you",
            "Make your way toward the oval behind you"
        ],
        text: "Pivoting from your current spot, you can make out silhouettes of presumably furniture around the room, but are unable to see in detail."
    }
    public static path00101: Snippet = {
        id: "path00101",
        options: [],
        text: "Your voice echoes around the room. Doesn't sound like there's much of padding in here - no rugs, cushions, etc.\n\n*Creeeaaak... THUD... THUD... THUD...*\nAny sense of relief felt from releasing your frustrations is quickly extinguished as you hear a door slowly groan open, followed by heavy footsteps as they make their way toward you. You must've been too loud and alerted your captor that you're conscious. Whoever arrived is here to correct that."
    }
}
