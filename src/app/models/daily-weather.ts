export class DailyWeather {
    time: Date;
    weatherCode: number;
    temperature2mMax: number;
    temperature2mMin: number;
    apparentTemperatureMax: number;
    apparentTemperatureMin: number;
    precipitationSum: number;
    constructor(
        time: Date,
        weatherCode: number,
        temperature2mMax: number,
        temperature2mMin: number,
        apparentTemperatureMax: number,
        apparentTemperatureMin: number,
        precipitationSum: number,
    ) {
        this.time = time;
        this.weatherCode = weatherCode;
        this.temperature2mMax = temperature2mMax;
        this.temperature2mMin = temperature2mMin;
        this.apparentTemperatureMax = apparentTemperatureMax;
        this.apparentTemperatureMin = apparentTemperatureMin;
        this.precipitationSum = precipitationSum;
    }
}