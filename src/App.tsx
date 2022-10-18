import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { WeatherForecastService } from "./services";
import type { IWeatherForecast } from "./interfaces";
import { Weather } from "./components";

export const App = defineComponent({
    setup() {
        const list = ref(new Array<IWeatherForecast>());

        return {
            list
        }
    },

    async mounted() {

        const response = await WeatherForecastService.GetWeather();
        this.list = response;

    },

    render() {
        return (
            <div style={{ padding: "10px" }}>
                {this.list.map((weather) => <Weather item={weather} />)}
            </div>
        )
    }
})

export default App;