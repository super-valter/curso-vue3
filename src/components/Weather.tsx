import { defineComponent, type PropType } from "vue";
import type { IWeatherForecast } from '@/interfaces'

import './Weather.css'

export const Weather = defineComponent({
    props: {
        item: { type: Object as PropType<IWeatherForecast>, required: true }
    },

    setup(props) {

        return () => (
            <div style="padding: 10px">
                <h2>{props.item.summary}</h2>
                <div>{props.item.temperatureC}ºC</div>
                <div>{props.item.temperatureF}ºF</div>
            </div>
        )
    }
})

export default Weather;