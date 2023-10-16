import { Cart } from "../models";
import { instrumentItems, vinylItems } from "./items";

export const emptyCart: Cart = {
    items: [],
    total: 0
}

export const fullCart: Cart = {
    items: instrumentItems.concat(vinylItems),
    total: 76543.93
}

export const instrumentCart: Cart = {
    items: instrumentItems,
    total: 75093.62
}

export const vinylCart: Cart = {
    items: vinylItems,
    total: 1450.31
}
