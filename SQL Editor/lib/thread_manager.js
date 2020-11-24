let thread_count_id = 0;
class Thread{
    constructor(class_location){
        this.class_location = class_location || null //this is the file
        this.thread_id = (thread_count_id++)//create a unique id from this thread 
    }

    start(){
        if(this.class_location == null){
            //sorry no class to run the thread
            return
        }else{
            let class_method = this.class_location.toString()
            let e =eval(class_method)
            
        }
    }

    is_alive(){

    }

    set_class(class_location){
        this.class_location = class_location
    }

}