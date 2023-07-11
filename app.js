function weather(){
    let cityname = document.getElementById('cityname').value
    let temp = document.getElementsByClassName('temp')[0]
    let farenheit = document.getElementsByClassName('temp_f')[0]
    let humidity = document.getElementsByClassName('humidity')[0]
    let feelslikec = document.getElementsByClassName('feelslike_c')[0]
    // let condition = document.getElementsByClassName('condition')[0]
    let wind = document.getElementsByClassName('wind_kph')[0];
    let precip = document.getElementsByClassName('precipitation')[0]
    let winddir = document.getElementsByClassName('wind_dir')[0]
    let location = document.getElementsByClassName('loc')[0]

  
axios.get(`http://api.weatherapi.com/v1/current.json?key=0c7feafc77eb4d5890762044230303&q=${cityname}`)
.then(function (response) {
// handle success
console.log(response);
// console.log(response.data.current.condition.text);
// console.log(response.data.current.temp_f);
// console.log(response.data.current.humidity);
// console.log(response.data.current.feelslike_c);
// console.log(response.data.current.feelslike_f);
// console.log(response.data.current.precip_mm);
// console.log(response.data.current.wind_dir);
// console.log(response.data.location.country);




temp.innerHTML = `${Math.round(response.data.current.temp_c)}°C`
wind.innerHTML = `<i class="fa-sharp fa-solid fa-wind"></i> Wind Speed: ${response.data.current.wind_kph} KM/H`
humidity.innerHTML = `<i class="bi bi-droplet-half"></i> Humidity ${response.data.current.humidity}%`
feelslikec.innerHTML = `<i class="bi bi-thermometer-half"></i> Feels like ${Math.round(response.data.current.feelslike_c)}°C`
precip.innerHTML = `Precipitation : ${response.data.current.precip_mm}`
winddir.innerHTML = `<i class="fa-sharp fa-solid fa-compass"></i> Wind Direction: ${response.data.current.wind_dir}`
location.innerHTML = `<i class="fa-sharp fa-solid fa-earth-americas"></i> Country: ${response.data.location.country}`

})


// if (response.data.current.condition.text == "cloud") {
//     condition.src = "./images/cloud.png";
//   } 
//   else if (response.data.current.condition.text == "rain"){
//     condition.src = "./images/rain.png";
//   }
// else if (response.data.current.condition.text == "mist"){
//   condition.src = "./images/mist.png";
// }
// else if (response.data.current.condition.text == ""){
//   condition.src = "./images/heavy rain.png";
// }
// else if (response.data.current.condition.text == "clear"){
//   condition.src = "./images/clear.png";
// }
// else if (response.data.current.condition.text == "snow"){
//   condition.src = "./images/snow.png";
// }

.catch(function (error) {
// handle error
console.log(error);
})
.finally(function () {
// always executed
});

}