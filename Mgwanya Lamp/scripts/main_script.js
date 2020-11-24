function _ready() {  
}
let state = false

function switch_tourch(event){
	if(state){
	state = false;
	event.target.innerHTML="OFF"
	event.target.className = "btn btn-dark btn-block  pt-4 pb-4 fixed-bottom"
	}else{
	state= true
	event.target.innerHTML="ON"
	event.target.className = "btn btn-warning btn-block  pt-4 pb-4 fixed-bottom"
	}	

	let h = new Hardware()
	h.switch_toach(state)
}

function _back_pressed(){
new Hardware().switch_toach(OFF)
App.close()
}