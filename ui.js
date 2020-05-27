class UI{
    constructor(){
        this.city = document.getElementById('city');
        this.temperature = document.getElementById('temperature');
        this.type = document.getElementById('w-type');
        this.description = document.getElementById('w-description');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
    }

    insertData(data){
        console.log(data);
        this.city.innerHTML = data.name;
        this.temperature.innerHTML = (data.main.temp - 273.15).toFixed(2)+'&#8451';
        this.type.innerHTML = `Weather: ${data.weather[0].main}`;
        this.description.innerHTML = `Description: ${data.weather[0].description}`;
        this.humidity.innerHTML = `Humidity: ${data.main.humidity}`;
        this.wind.innerHTML = `Wind Speed: ${data.wind.speed}`;
    }
    showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const parent = document.querySelector('.card');
        const sibling = document.querySelector('#city');
        parent.insertBefore(div, sibling);
        setTimeout(()=>{
            document.querySelector('.alert').remove()
        }, 2000);
    }
}