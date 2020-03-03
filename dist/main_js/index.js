import * as Elements from '/src/js/htmlElement.js'
import {Http} from '/src/js/http.js';
import {Weather_data,weather_data_handler} from '/src/js/weather_data.js';

let main = document.querySelector('main');

const city_id = 'e76593960ee5a9de5d6d50a325fe111b';

Elements.WEATHER_BTN.addEventListener('click', Weather_App)
function  Weather_App(e){
    e.preventDefault()

     const City_name= Elements.WEATHER_INPUT.value.trim()

 if(City_name.length == 0){
     return alert('Please Fill in City Name')
 }

   const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + City_name + '&units=metric&appid='+ city_id; 

    Elements.LOADING.style.display = 'block'
    main.style.display = 'none'

   Http.httpRequest(url)
   .then(response =>{

       const respond_data = new Weather_data(City_name, response.weather[0].description)
   
      const weather_proxy = new Proxy(respond_data, weather_data_handler)
      weather_proxy.temperation = response.main.temp;  
      console.log(weather_proxy.description)
      
      htmlOut(weather_proxy)

   })
   .catch(error=>{
      alert('Error Occur') 
   })
 
}

function htmlOut(weather_html){
     
    Elements.WEATHER_NAME.innerHTML = weather_html.weather_name;
    Elements.WEATHER_DESCRIPTION.innerHTML = weather_html.description;
    Elements.WEATHER_TEMPERATION.innerHTML = weather_html.temperation;


    main.style.display = 'block'
    Elements.LOADING.style.display = 'none'
  

}