let input_city=document.getElementById('input');
let button=document.querySelector('.button')
let temperature=document.querySelector('.temp');
let humidity=document.querySelector('.humidity')
let windspeed=document.querySelector('.windspeed')
let city_name=document.querySelector('.town_name')




const weather_cast_info= async(city)=>{
    if(city==""){
        alert("enter cityname")
    }
    else{

        try{
            let apikey= "70592b526d9742b8b1bb7e8932ee97cd"
            let url_info=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
            let response= await fetch(url_info);
            let weather_data= await response.json();
            weather_display(weather_data)
        }catch(error){
            alert(error)
        }
    }
}


const weather_display=(weather_data_input)=>{
    // console.log(weather_data_input)
    city_name.innerHTML=weather_data_input.name
    temperature.innerHTML=weather_data_input.main.temp +'°C'
    humidity.innerHTML=weather_data_input.main.humidity+'%'
    windspeed.innerHTML=weather_data_input.wind.speed+"km/hr";
}

button.addEventListener('click',()=>{
    weather_cast_info(input_city.value)
});