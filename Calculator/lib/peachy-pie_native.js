let _root={}
let Files={}
let Permission = {}
let Data={}
let App={}
//for the Media class
const AUDIO = true
const VIDEO = false
let Playback ={}
Playback.loop = 1
Playback.repeat = 2
Playback.next = 3
Playback.previos = 4
Playback.destroy = 5

//Media class end


let ON = true//some usable variables
let OFF = false//some usable variables
_root.app = null//default root object


_root.init=(app)=>{
    //lets load all the application dependency files from code
    // Toast(_root.app)
    load_dependencies()
    load_standalone_methods()
    describe_file_permissions()
    //whole app entry point
    _root.app=app
    Files.SDCARD = app.get_root()
    Files.DCIM = app.get_dcim_directory()
    Files.DOCUMENTS = app.get_documents_directory()
    Files.DOWNLOADS = app.get_downloads_directory()
    App.close = () =>{
        app.close()
    }
    App.exit = () =>{
        app.close()
    }
 
    //prepare secure variables, out of this context
    Data = JSON.parse(app.get_sensitive_data());//sensitive data will be placed before compiling the final code, will be
    
    //byet coded and serialized to json. To setup such data go to project settings, and add preload_data
    //specify the key and value, specify if you want the data to change or to be constant
    // _ready()//call the ready function when all is well
}

let load_dependencies = ()=>{
    //this will write all required external application js dependency files
    let imported_scripts = [
        "file.js","hardware.js","notifications.js",
        "permissions.js","sql.js","http.js",
        "thread_manager.js","media.js"]
    //this is for the version one factor
    let peachy_pi_script;
    let head_elements = document.head.children
     
    for(var i=1;i<head_elements.length;i++){
        let obj = head_elements[i]
        let tag = obj.tagName || "None"
        let src = obj.src || "None"
        if (tag == "SCRIPT" && src.endsWith("peachy-pie_native.js")){
            peachy_pi_script = obj
            break
        }

	
    }
    imported_scripts.forEach((script)=>{
        let s = create("script")//gslib method
        s.src = "../lib/"+script //set the location of the script
        peachy_pi_script.parentNode.insertBefore(s,peachy_pi_script.nextSibling)
    })
    
    
}


let toast
let load_standalone_methods = ()=>{
    toast = (message,duration)=>{
        new Notification().toast(message, duration || 3)
    }
}

let describe_file_permissions = ()=>{
    //FEEL FREE TO ADD MORE PERMISSIONS TO THIS FILE
    Permission.INTERNET = "INTERNET"
    Permission.READ_SDCARD = "READ_SDCARD"
    Permission.WRITE_SDCARD = "WRITE_SDCARD"

    Permission.VIBRATION = "VIBRATION"
    Permission.READ_CONTACTS = "READ_CONTACTS"
    Permission.WRITE_CONTACTS = "WRITE_CONTACTS"
    Permission.READ_CALENDER = "READ_CALENDER"
}