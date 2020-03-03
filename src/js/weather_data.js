export class Weather_data{
    constructor(weather_name, description){
        this.weather_name = weather_name;
        this.description = description;
        this.temperation= '';
    }
}
export const weather_data_handler = {
    get:function(target, property){
       return Reflect.get(target, property)
    },
    set: function(target, property, value) {
        const newValue = (value * 1.8 + 32).toFixed(2) + 'F.';
       return Reflect.set(target, property, newValue)
  
    }
}