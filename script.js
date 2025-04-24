//ключ от погоды
//c2d465bd0b02eabaf001422cfe6f3517


let connection = new XMLHttpRequest();

function CheckTemp() {
    
    let city = document.getElementById("City"); 
	cityName.innerHTML = city.value;

    connection.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&APPID=`, true);
    connection.send();
}

let mainBox = document.getElementById("mainBox");
let minBox = document.getElementById("minBox");
let maxBox = document.getElementById("maxBox");
let windBox = document.getElementById("windBox");
let cloudBox = document.getElementById("cloudBox");
let infoBox = document.getElementById("infoBox");
let hourlyForecastBox = document.getElementById("hourlyForecastBox");
let cityName = document.getElementById("cityName");



connection.onload = function() {
    if (connection.status == 200) {
        let data = JSON.parse(connection.responseText);

        mainBox.innerHTML = data.main.temp + "°C";
        minBox.innerHTML = data.main.temp_min + "°C";
        maxBox.innerHTML = data.main.temp_max + "°C";
        windBox.innerHTML = data.wind.speed + " м/c";
        infoBox.innerHTML = data.weather[0].description; 
        cloudBox.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
       

    } else {
        console.error('Ошибка:', connection.statusText);
        
    }
}

let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
document.getElementById("currentDate").innerHTML = day + "." + month+ "." + year;
cityName.innerHTML += city.value;


// function getDailyForecast(lat, lon) {
//     let forecastConnection = new XMLHttpRequest();
//     forecastConnection.open("GET", `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=a56775169e6835ec0a4a0a49958b0da5`, true);
//     forecastConnection.send();

//     forecastConnection.onload = function() {
//         if (forecastConnection.status == 200) {
//             let forecastInformation = JSON.parse(forecastConnection.responseText);
//             hourlyForecastBox.innerHTML = ""; // Очищаем предыдущие данные
            
//             // Временные метки для 7, 10, 15 и 20 часов
//             const hoursToDisplay = [7, 10, 15, 20];
//             const forecastList = forecastInformation.list;

//             hoursToDisplay.forEach(hours => {
//                 // Находим индекс соответствующего прогноза
//                 const index = Math.floor(hours / 3); // Каждые 3 часа
//                 if (index < forecastList.length) {
//                     let date = new Date(forecastList[index].dt * 1000);
//                     let temp = forecastList[index].main.temp;
//                     let description = forecastList[index].weather[0].description;

//                     hourlyForecastBox.innerHTML += `<div>
//                         <strong>${date.toLocaleString()}</strong>: ${temp}°C, ${description}
//                     </div>`;
//                 }
//             });
//         } else {
//             console.error('Ошибка при получении почасового прогноза:', forecastConnection.statusText);
//         }
//     }
// }



// function getHourlyForecast(lat, lon) {
//     let forecastConnection = new XMLHttpRequest();
//     forecastConnection.open("GET", `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=a56775169e6835ec0a4a0a49958b0da5`, true);
//     forecastConnection.send();

//     forecastConnection.onload = function() {
//         if (forecastConnection.status == 200) {
//             let forecastInformation = JSON.parse(forecastConnection.responseText);
//             hourlyForecastBox.innerHTML = ""; // Очищаем предыдущие данные
//             for (let i = 0; i < forecastInformation.list.length; i += 8) { // Каждые 3 часа
//                 let date = new Date(forecastInformation.list[i].dt * 1000);
//                 let temp = forecastInformation.list[i].main.temp;
//                 let description = forecastInformation.list[i].weather[0].description;

//                 hourlyForecastBox.innerHTML += `<div>
//                     <strong>${date.toLocaleString()}</strong>: ${temp}°C, ${description}
//                 </div>`;
//             }
//         } else {
//             console.error('Ошибка при получении почасового прогноза:', forecastConnection.statusText);
//         }
//     }
// }

// connection.onload = function() 
// {
//     if(connection.status == 200)
//     {
//         let tempInformation = JSON.parse(connection.responseText);
//         //box.innerHTML += connection.responseText;
//         box.innerHTML = "now= " + tempInformation.main.temp + "°C"
//         + "<br>" +
//          "min= " + tempInformation.main.temp_min + "°C"+
//          "<br>"
//         + "max= " + tempInformation.main.temp_max + "°C";
//     }
// }


