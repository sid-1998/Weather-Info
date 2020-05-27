class Storage{
    constructor(){
        this.city;
    }

    storeInLS(data){
        localStorage.setItem('city', data);
    }

    getFromLS(){
        return localStorage.getItem('city');
    }
}