var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "3e42e3f93749acac9b93953f0798342c"
function convertion(val)
{
    return (val - 273).toFixed(3)
}
btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
       {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspeed = data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}</span>`
        temp.innerHTML=`Temperature: <span>${convertion(tempature)} C</span>`
        description.innerHTML =`sky conditions: <span>${descrip}</span>`
        wind.innerHTML = `wind speed: <span>${wndspeed} km/h</span>`
    } )

    .catch(err => alter('You entered wrong city name'))
})