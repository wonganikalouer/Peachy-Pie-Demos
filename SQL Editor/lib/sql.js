class sql_connector{
    constructor(){
        this.query = "";
    }

    execute_query(sql_statement,function_results){
        //run the sqlite query on behalf of the user
        this.query = sql_statement;//save the sql statement for furthor instances
        let sql_result = _root.app.execute_query(sql_statement); //we have the data here, we have to make it json
        function_results(JSON.parse(sql_result))
    }

    exec(sql_statement){
        _root.app.exec(sql_statement);
    }



    insert(table_name,data_object){
        //table name is the name of the sqlite table to insert to
        //data object is a json object
        return _root.app.sql_insert_data(table_name, JSON.stringify(data_object))
    }
    
    results(queyr_result){
        return [];//returns an argualble array of child sql_results
    }
}

