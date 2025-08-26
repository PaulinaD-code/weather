

const cityName = document.querySelector('.city');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind');
let input = document.querySelector('.weather-input');
const checkBtn = document.querySelector('.check--btn');
let image = document.querySelector('.weather-icon');
let container = document.querySelector('.weather');
let errorMessage = document.querySelector('.error');
let countryId = document.querySelector('.country')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        errorMessage.style.display = "block"
        container.style.display = "none"
    }else{
        errorMessage.style.display = "none";
        container.style.display = "block"

        let data = await response.json();

        cityName.innerHTML = ` ${data.name}`;
        temperature.innerHTML = `${ Math.round(data.main.temp) }°C` ;
        countryId.innerHTML = `(${data.sys.country})`
        humidity.innerHTML = `${data.main.humidity}%` ;
        windSpeed.innerHTML = `${data.wind.speed} km/h`

        let imageData = data.weather[0].main;
    
        switch(imageData){
            case "Clear":
                image.src =`images/sun.png`
                break;
            case  "Clouds":
                image.src =`images/cloudy.png`
                break;
            case  "Drizzle":
                image.src=`images/rainy-color.png`
                break;
            case  "Mist":
                image.src=`images/foggy-day.png`
                break;
            case "Rain":
                image.src=`images/heavy-rain.png`
                break;
             case  "Snow":
                image.src=`images/snowy.png`
                break;
            default:
            image.src= `images/storm.png`
    }
    }
}


checkBtn.addEventListener('click', ()=>{
    
    checkWeather(input.value)
})

window.addEventListener('keydown', ()=>{
    if(event.key === "Enter"){
        checkWeather(input.value)
    }
})





