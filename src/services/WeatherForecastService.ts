import type { IWeatherForecast } from "@/interfaces";
import axios from "axios";

const http = axios.create({
  baseURL: "https://localhost:7042/weatherforecast",
});

export class WeatherForecastService {
  /**
   * Returns a list with weather
   */
  static async GetWeather() {
    const response = await http.get<Array<IWeatherForecast>>("");
    return response.data;
  }

  /**
   * Return current weather
   */
  static async GetCurrentWeather() {
    const response = await http.get<IWeatherForecast>("/today");
    return response.data;
  }
}
