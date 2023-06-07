import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Forecast } from "../models/forecast";
import { WeatherTypes } from "./constants";

export class MockForecasts {
    public static fall: Forecast = {
        highTemp: [52, 50, 48, 46, 44, 42, 40],
        lowTemp: [42, 40, 38, 36, 34, 32, 30],
        weather: [
            WeatherTypes[4],
            WeatherTypes[5],
            WeatherTypes[4],
            WeatherTypes[5],
            WeatherTypes[4],
            WeatherTypes[5],
            WeatherTypes[4]
        ]
    };
    public static spring: Forecast = {
        highTemp: [66, 64, 62, 60, 58, 56, 54],
        lowTemp: [56, 54, 52, 50, 48, 46, 44],
        weather: [
            WeatherTypes[5],
            WeatherTypes[6],
            WeatherTypes[5],
            WeatherTypes[6],
            WeatherTypes[5],
            WeatherTypes[6],
            WeatherTypes[5]
        ]
    };
    public static summer: Forecast = {
        highTemp: [95, 90, 85, 80, 75, 70, 66],
        lowTemp: [90, 85, 80, 75, 70, 65, 60],
        weather: [
            WeatherTypes[9],
            WeatherTypes[8],
            WeatherTypes[9],
            WeatherTypes[7],
            WeatherTypes[8],
            WeatherTypes[7],
            WeatherTypes[9]
        ]
    };
    public static winter: Forecast = {
        highTemp: [30, 25, 20, 15, 10, 5, 0],
        lowTemp: [25, 20, 15, 10, 5, 0, -5],
        weather: [
            WeatherTypes[3],
            WeatherTypes[2],
            WeatherTypes[3],
            WeatherTypes[1],
            WeatherTypes[2],
            WeatherTypes[1],
            WeatherTypes[3]
        ]
    };
}

export const MockForm: FormGroup = new FormGroup({
    street: new FormControl('1234 Name St.', [
        Validators.required,
        Validators.pattern(/^\d+\s[A-Z][a-z]+\s[A-Z][a-z]+\.$/)
    ]),
    city: new FormControl('Townsville', [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z]+$/)
    ]),
    state: new FormControl('OH - Ohio', Validators.required),
    country: new FormControl('US - United States', Validators.required),
    zip: new FormControl('12345-6789', [
        Validators.required,
        Validators.pattern(/^\d{5}-\d{4}$/)
      ])
});

export class MockStreets {
    public static fall: string = '1234 Fall Flt.';
    public static random: string = '2345 Random Blvd.';
    public static spring: string = '3456 Spring Mdw.';
    public static summer: string = '4567 Summer Cv.';
    public static winter: string = '5678 Winter Vly.';
}
