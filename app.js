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
            if(data.cod==="404"){
                console.log("fuck")
                ui.showAlert("City Not Found", className);
            }else{
                ui.insertData(data);
            }
            
        })
        
}
document.getElementById('save-btn').addEventListener('click', ()=>{
    const city = document.getElementById('new-city')
    // console.log(city);
    weather.setLocation(city.value);
    weather.getData()
        .then(data=>{
            if(data.cod==="404"){
                console.log(data)
                ui.showAlert("City Not Found", "danger");
            }else{
                ui.insertData(data);
                ls.storeInLS(city.value);
            }
            
        })
    $('#locModal').modal('hide');
})



    


