const apiKey = "75e8518efcab1422b439cb6f6a0622fd";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
        const searchCity = document.querySelector(".search input");

        const searchBtn = document.querySelector(".search button");
        const  weatherIcon = document.querySelector(".weather-icon")

        async function checkWeather(city){
            const response = await fetch(apiUrl + `q=${city}&appid=${apiKey}`);
            if(response.status == 404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
                let data = await response.json();
            

            document.querySelector(".city").innerText = data.name ;
            document.querySelector(".temp").innerText = Math.round(data.main.temp )+ "°C";
            document.querySelector(".humidity").innerText = data.main.humidity +"%";
            document.querySelector(".wind").innerText = data.wind.speed +"km\h";
            
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Drizzel"){
                weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display="none";
            }
           
        }
         searchBtn.addEventListener("click" , ()=>{
            checkWeather(searchCity.value);
         })
        
