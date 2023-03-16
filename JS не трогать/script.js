const humidityClass = document.querySelector('.huuumidity')
const Pweather = document.querySelector('.weather')
const header = document.querySelector('.header');
const Prosto = document.querySelector('.prosto')
const image = document.querySelector('.img'); 
const tempCard = document.querySelector('.temp_c'); 
const Wind = document.querySelector('.wind');
const Humidity = document.querySelector('.humidity')
const HApi = document.querySelector('.ApiH')
const box = document.querySelector('.circle');
const Container = document.querySelector('.container');

const btnVitebsk = document.querySelector('.btnVitebsk');
const btnBrest = document.querySelector('.btnBrest');
const btnMinsk = document.querySelector('.btnMinsk');

let city = 'Minsk'
let url = `http://api.weatherapi.com/v1/current.json?key=daebc8d0a3d64617ad0153304231402&aqi=no&q=` 
let tempC;

function fetchStart(){
    fetch(url + city) 
    .then(res => res.json()) 
    .then((res) => { 
        console.log(res.location.name);
         tempCard.innerText = res.current.temp_c; 
         image.src = 'https:' + res.current.condition.icon; 
         Wind.innerText = res.current.wind_kph;
         HApi.innerText = res.current.humidity;

        if(res.current.temp_c <= 0){
            box.style.boxShadow =  '10px 5px 5px 5px white';
        }else{
           /*  console.log('error white'); */
        }


        if(res.current.temp_c > 10){
            box.style.boxShadow = '10px 5px 5px 5px gold';
        }else{
            /* console.log('error gold'); */
        } 



        if(res.current.temp_c > 0  || res.current.temp_c <= 10){
            box.style.boxShadow = '10px 5px 5px 5px rgba(11, 93, 156, 0.616) '
        }else {
           /*  console.log = ('error rgba') */
        }
          
        
    })
}
fetchStart(url);

btnVitebsk.addEventListener('click', function(){
    city = btnVitebsk.value;
    btnVitebsk.classList.remove('btnCity');
    btnVitebsk.classList.add('newBtnCity');
    fetchStart()
})

btnBrest.addEventListener('click', function(){
    city = btnBrest.value;
    btnBrest.classList.toggle('btnCity');
    btnBrest.classList.toggle('newBtnCity');
    fetchStart()
})

btnMinsk.addEventListener('click', function(){
    city = btnMinsk.value;
    btnMinsk.classList.remove('btnCity')
    btnMinsk.classList.add('newBtnCity');
    fetchStart()
})




