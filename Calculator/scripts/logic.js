let first_number = null
let method = null
let theme = false //false is dark and true is light
function _ready() {
}

function _back_pressed() {
    App.close()
}

function place_number(event) {
    //event is the button that was pressed, it will be used to get the number on the button
    let number_pressed = event.target.innerHTML
    let number_on_view = getValue("field-view")
    let final_number = number_on_view+""+number_pressed
    setValue("field-view",parseFloat(final_number))
    // alert(event.target.innerHTML)
}

function negate_value() {
    let number_pressed = getValue("field-view")*-1
    setValue("field-view", parseFloat(number_pressed))
}

function clear_screen() {
    setValue("field-view", parseFloat(0))
    first_number = null
}


function times() {
    if(first_number==null){
        first_number = parseFloat(getValue("field-view"))
        setValue("field-view",0)
    }
    else{
        let second_number = parseFloat(getValue("field-view")) * first_number
        first_number = second_number
        setValue("field-view",parseFloat(second_number))
    }
    method = 0 //for times
}

function minus() {
    if(first_number==null){
        first_number = parseFloat(getValue("field-view"))
        setValue("field-view",0)
    }
    else{
        let second_number = first_number - parseFloat(getValue("field-view"))
        first_number = second_number
        setValue("field-view",parseFloat(second_number))
    }
    method = 1 //for times
}

function add() {
    if(first_number==null){
        first_number = parseFloat(getValue("field-view"))
        setValue("field-view",0)
    }
    else{
        let second_number = parseFloat(getValue("field-view")) + first_number
        first_number = second_number
        setValue("field-view",parseFloat(second_number))
    }
    method = 2 //for times
}

function divide() {
    if(first_number==null){
        first_number = parseFloat(getValue("field-view"))
        setValue("field-view",0)
    }
    else{
        let second_number = first_number / parseFloat(getValue("field-view")) 
        first_number = second_number
        setValue("field-view",parseFloat(second_number))
    }
    method = 3 //for times
}

function equals() {
    if(method==0){
        let second_number = parseFloat(getValue("field-view")) * first_number
        first_number = null
        setValue("field-view", parseFloat(second_number))
    }
    if(method==1){
        let second_number = first_number - parseFloat(getValue("field-view"))
        first_number = null
        setValue("field-view", parseFloat(second_number))
    }
    if(method==2){
        let second_number = parseFloat(getValue("field-view")) + first_number
        first_number = null
        setValue("field-view", parseFloat(second_number))
    }
    if(method==3){
        let second_number = first_number / parseFloat(getValue("field-view")) 
        first_number = null
        setValue("field-view", parseFloat(second_number))
    }
}

function cos() {
    let second_number = parseFloat(getValue("field-view"))
    setValue("field-view",Math.cos(second_number*Math.PI))   
}
function tan() {
    let second_number = parseFloat(getValue("field-view"))
    setValue("field-view",Math.tan(second_number*Math.PI))   
}
function sin() {
    let second_number = parseFloat(getValue("field-view"))
    setValue("field-view",Math.sin(second_number*Math.PI))   
}

function sqrt() {
    let second_number = parseFloat(getValue("field-view"))
    setValue("field-view", Math.sqrt(second_number))
}

function point() {
    let second_number = getValue("field-view")
    if(second_number.split(".").length<2){
        setValue("field-view",second_number+".")
    }

}


function change_theme() {
    if(theme){
        theme=false
        get("body").className = "bg-dark text-light"
        
    }else{
        theme = true
        get("body").className = "bg-light text-dark"
    }
}