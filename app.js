const weather = new Weather();
const ui = new UI;
const ls = new Storage;

document.addEventListener('DOMContentLoaded', load);

function load(){
    let currCity = ls.getFromLS();
    if(currCity === null){
        currCity = weather.getLocation();
    }
    weather.setLocation(currCity);
    weather.getData()
        .then(data=>{
            ui.insertData(data);
        })
}
document.getElementById('save-btn').addEventListener('click', ()=>{
    const city = document.getElementById('new-city')
    // console.log(city);
    weather.setLocation(city.value);
    ls.storeInLS(city.value);
    weather.getData()
        .then(data=>ui.insertData(data));
    
    $('#locModal').modal('hide');
})



    


