export class WeeklyWeather {

    time: Date[];
    weatherCode: Float32Array;
    temperature2mMax: Float32Array;
    temperature2mMin: Float32Array;
    precipitationSum: Float32Array;
    constructor(
        time: Date[],
        weatherCode: Float32Array,
        temperature2mMax: Float32Array,
        temperature2mMin: Float32Array,
        precipitationSum: Float32Array,
    ) {
        this.time = time;
        this.weatherCode = weatherCode;
        this.temperature2mMax = temperature2mMax;
        this.temperature2mMin = temperature2mMin;
        this.precipitationSum = precipitationSum;
    }
}