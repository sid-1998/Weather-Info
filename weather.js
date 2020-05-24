class Weather{
    constructor(){
        this.city;
        this.state;
        this.defaultCity = "New Delhi";
        this.defaultState = "DL";
        this.key = config.key;
    }

    
    async getData(){
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q={${this.city}},{${this.state}}&appid={${this.key}}`);
        const resData = await response.json();
        return resData;
    }

    setLocation(city, state){
        this.city = city;
        this.state = state;
    }

    getLocation(){
        return {city:this.city, state:this.state}
    }
}