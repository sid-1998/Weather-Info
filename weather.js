class Weather{
    constructor(){
        this.city;
        this.defaultCity = "Chandigarh";
        this.key = config.key;
    }

    
    async getData(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},&appid=${this.key}`);
        const resData = await response.json();
        return resData;
    }

    setLocation(city){
        this.city = city;
    }

    getLocation(){
        return {city:this.city}
    }
}