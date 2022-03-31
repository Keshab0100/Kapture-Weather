const submitBtn = document.getElementById('submitBtn');
const cityName  = document.getElementById('cityName');
const city_name  = document.getElementById('city_name');
const displayCity = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status')
const temp = document.getElementById('temp')
const dataHide = document.querySelector(".main_layer")
const openweather_token = "sample text, enter valid token id";

const getInfo = async (event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===''){
        alert('Enter valid city name')
        dataHide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${openweather_token}`
            const response = await fetch(url);
            const data = await response.json();
            
            temp.innerText = data.main.temp;
            // temp_status.innerText = data.weather[0].main;
            city_name.innerText = `${data.name} , ${data.sys.country} `;


             //Condition to check status of weather
            const tempmood = data.weather[0].main;
            if(tempmood=="Clear"){
                temp_status.innerHTML = `<i class="fas fa-sun" style='color: #eccc68'></i>`;
            }
            else if(tempmood = "Clouds"){
                temp_status.innerHTML = `<i class="fas fa-cloud"  style='color: #f1f2f6'></i>`;
            }
            else if(tempmood = "Rain"){
                temp_status.innerHTML = `<i class="fas fa-cloud-rain"  style='color: #a4b0be'></i>`;
            }
            else{
                temp_status.innerHTML = `<i class="fas fa-sun"  style='color: #eccc68'></i>`;
            }
            dataHide.classList.remove('data_hide');


        }
        catch(error){
            alert('Enter valid city name')
            dataHide.classList.add('data_hide');
            console.log(error);
        }
    }
    
}

submitBtn.addEventListener('click', getInfo);
