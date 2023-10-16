import { Stock } from "../models";
import { instrumentData } from "./instruments";
import { vinylData } from "./vinyls";

export const emptyStock: Stock = {
    instruments: [],
    vinyls: []
}

export const fullStock: Stock = {
    instruments: instrumentData,
    vinyls: vinylData
}

export const instrumentStock: Stock = {
    instruments: instrumentData,
    vinyls: []
}

export const vinylStock: Stock = {
    instruments: [],
    vinyls: vinylData
}
