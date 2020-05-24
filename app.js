const weather = new Weather();


document.addEventListener('DOMContentLoaded', load);

function load(){
    weather.setLocation("New Delhi", "DL");

    console.log(weather.getLocation());
    
    weather.getData()
        .then(data=>console.log(data));
}


    


