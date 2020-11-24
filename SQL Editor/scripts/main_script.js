function __ready() {
  	//sql object
    let sql = new sql_connector()
	let query = `CREATE TABLE "my_table"("_ID" INTEGER, "name"	TEXT,"AGE"	TEXT, PRIMARY KEY("_ID" AUTOINCREMENT));`;
	sql.exec(query)
  
  	read_data()
}

function _back_pressed(){
	App.close()
}

let counter = 0;
function save_data() {
	let name = getValue("name");
	let age = getValue("age");
  	
  	//create a table row
	let tr = create("tr")
    
    //table columns
	let td1 = create("td")
	let td2 = create("td")
	let td3 = create("td")
	counter++;
	td1.innerHTML = counter
	td2.innerHTML = name
	td3.innerHTML = age

	tr.appendChild(td1)
	tr.appendChild(td2)
	tr.appendChild(td3)
  	
	set("table-data", tr)

	let link = new sql_connector();
	let data ={"name":name,"age":age}
	link.insert("my_table",data) //save to sqlite database

}

function read_data() {
	let link = new sql_connector()
	link.execute_query("SELECT * FROM my_table",function(results){
		results.forEach(data => {
			populate_table(data.name,data.AGE)
		});
	});
	
}

function populate_table(name,age){
	// let sql = new sql_connector();
	// toast("user saved")
	//lets display this user on the data table
	let tr = create("tr")
	let td1 = create("td")
	let td2 = create("td")
	let td3 = create("td")
	counter++;
	td1.innerHTML = counter
	td2.innerHTML = name
	td3.innerHTML = age

	tr.appendChild(td1)
	tr.appendChild(td2)
	tr.appendChild(td3)
	set("table-data", tr)

}









