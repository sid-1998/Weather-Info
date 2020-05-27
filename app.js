const weather = new Weather();
const ui = new UI;


document.addEventListener('DOMContentLoaded', load);

function load(){
    weather.setLocation("Chandigarh");
    
    weather.getData()
        .then(data=>{
            ui.insertData(data);
        })
}
document.getElementById('save-btn').addEventListener('click', ()=>{
    const city = document.getElementById('new-city')
    // console.log(city);
    weather.setLocation(city.value);
    weather.getData()
        .then(data=>ui.insertData(data));
    
    $('#locModal').modal('hide');
})



    


