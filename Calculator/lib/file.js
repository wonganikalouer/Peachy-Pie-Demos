class File{
    constructor(default_file_location){
        this.file_location = default_file_location
    }

    get_name(){
        return _root.app.get_name(this.file_location)
    }

    is_directory(){
        return _root.app.is_file_directory(this.file_location)
    }

    read(){
        return _root.app.read_file_as_text(this.file_location);
    }

    write(string_to_write){
        return _root.app.write_text_to_file(this.file_location,string_to_write);
    }

    create(){
        return _root.app.create_file(this.file_location)
    }

    is_file(){
        return _root.app.is_file(this.file_location)
    }

    list_files(){
        if(this.is_directory){
            //only parse when the file is a directory
            let file_stack = _root.app.list_files(this.file_location).split("<>")
            let files_to_return=[]
            file_stack.forEach(file_new_location => {
                files_to_return.push(new File(file_new_location))
            });
            return files_to_return
        }else{
            return false//this is not a valid file
        }
    }

    delete(){
        return _root.app.delete_file(this.file_location)
    }

    rename(new_name){
        return _root.app.rename_file(this.file_location,new_name)
    }

    is_hidden(){
        return _root.app.is_file_hidden(this.file_location)
    }

    exists(){
        return _root.app.file_exists(this.file_location)
    }

    make_dir(){
        return _root.app.file_make_directory(this.file_location)
    }
}