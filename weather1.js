var cityname = document.querySelector('.cityname')
var button = document.querySelector('.button')
var city = document.querySelector('.city')
var temp = document.querySelector('.temp')
var summary = document.querySelector('.summary')
var iconw = document.querySelector('.icon5')
var humidity1=document.querySelector('.humi')
var tz1=document.querySelector('.time1')
button.addEventListener('click',function (name) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityname.value+'&units=metric&APPID=4518fda2354200ccbb21eb2e9b2bb395')
.then(response => response.json())
.then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];
    var iconweather = data['weather'][0]['icon'];
    var humidi =data['main']['humidity'];
    var tz =data['timezone'];
    city.innerHTML = "<HR color='white'>"+nameValue+"<HR color='white'>";
    summary.innerHTML = "Summary : "+descValue;
    temp.innerHTML = "Temperature : "+tempValue+"&deg C";
    iconw.innerHTML = "<img width='100pt' height='100pt' src='http://openweathermap.org/img/w/" +iconweather+ ".png' alt='Icon depicting current weather.'>"
    humidity1.innerHTML="humidity : "+humidi+"%";
    tz1.innerHTML = "TimeZone : "+tz;
    cityname.value ="";
})
.catch(err =>alert("Wrong city name!"))
})


