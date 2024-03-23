//.env apikey 719d9ed2bddf3f25eff54ef55e6293d1

let apikey="719d9ed2bddf3f25eff54ef55e6293d1"
// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={719d9ed2bddf3f25eff54ef55e6293d1}
window.addEventListener(('load'),()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>
        {
            long=position.coords.longitude
            lat=position.coords.latitude
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=metric&lon=${long}&APPID=${apikey}`)
            .then((res)=>res.json())
            .then((res)=>
                {
                    setContent(res)
                })
        })
    }
});

const setContent=(res)=>{
    const {name,main,weather}=res
    //get elements
    let locationTimezone=document.querySelector('.location-timezone')
    let locationIcon=document.querySelector('.location-icon')
    let temperaturDegree=document.querySelector('.temperature-degree')
    let temperatureDiscription=document.querySelector('.temperature-description')
    // set content
    let dayIcon=`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    temperatureDiscription.textContent=weather[0].description.toUpperCase()
    temperaturDegree.textContent=main.temp
    locationTimezone.textContent=name;
    locationIcon.src=dayIcon
}