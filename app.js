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
    const city = document.getElementById('new-city').value;
    console.log(city);
    $('#locModal').modal('hide');
})



    


