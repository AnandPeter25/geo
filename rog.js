// ----------------------------darkmode-------------------------------------

const changeMode=()=>{
    let mybody = document.body;
    mybody.classList.toggle('mydark')
}

// ----------------------------coupon-------------------------------------

function loadCoupon(){
    document.getElementById('coupon').style.display="block";
    document.getElementById('demo').style.opacity="0.8";
}

const closeCoupon = () => {
    document.getElementById('coupon').style.display="none";
    document.getElementById('demo').style.opacity="1";
}


// ----------------------------geoloction-------------------------------------

let x = document.getElementById('out');
let y = document.getElementById('weather');
let z = document.getElementById('location');
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
        document.getElementById('city').style.display="block";
        document.getElementById('city1').style.display="block";
    }else{
        x.innerText= "Geo Not Supported"
    }
}

function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    // x.innerText = `Lat is ${lat} & long is ${long}`;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //api calling
    fetch(url,{method:'GET'})
    //return promise
    .then((res) => res.json())
    // resolve the promise
    .then((data) => {
        // y.innerText = `Your City is ${data.city.name}`
        // z.innerText = `Temp of day is ${data.list[0].temp.day} °C`
        document.getElementById('cityname').innerText= data.city.name
        document.getElementById('tempname').innerText= data.list[0].temp.day
    })
}
