class Hardware{
    constructor(){
    }

    switch_toach(ON_OFF){
        _root.app.switch_tourch(ON_OFF)
    }

    vibrate(duration){
        _root.app.vibrate_phone(duration)//self explanatory method
    }

    get_gps_service(){
        // return new gps_service()
    }
    
}
