//we will use this type of object due to its scalability
class Media{
    constructor(media_type){
        //media type is either video or audio
        this.type = media_type || true //default is audio
        this.media_file = null
        this.media_source = null
    }

    set_file(media_file){
        this.media_file = media_file
    }

    set_location(media_source){
        this.media_source = media_source
    }

    play(){
        //play the set media file
    }

    get_media_service(){
        if (this.type==AUDIO){
        return new media_service(this)
        }else{
            console.log("sorry, not support for video");
            throw new Error("you cant get a media service for a VIDEO file");
        }
    }

}

 class media_service{
    constructor(media_object){
        this.media_object = media_object
        this.on_play = null
        this.plaback_mode = Playback.next
        _root.app.prepare_media_service()//this will switch on the service
    }

    play(){
        //this will actually start playing the service
        return _root.app.play_service()
    }

    pause(){
        return _root.app.pause_service()
    }

    stop(){
        return _root.app.stop_service()
    }

    next(){
        return _root.app.next_service()
    }

    previous(){
        return _root.app.previous_service()
    }

    seek(seek_interval_in_seconds){
        _root.app.seek_service(seek_interval_in_seconds)
    }

    set_on_play(on_play_method_name){
        //on_play_method_name is a string of the name of the method parsed
        //the method will receive parameters like
        //song name; artist; abulm; year; current_time, duration, song_position in list;
        _root.app.on_playback(on_play_method_name)
    }

    set_on_finish(what_should_happen_after_playback){
        this.plaback_mode = what_should_happen_after_playback || Playback.next
        _root.app.set_on_finish(this.plaback_mode)
    }

    add_audio_files(file_list){
        ///Send the file_list which is an array of files///
        let file_list_convert = []
        //create a simplified array of file locations 
        file_list.forEach(file => {
            if (file.get_name().endsWith(".mp3")) {
                file_list_convert.push(file.file_location)    
            }
        });
        _root.app.media_service_add_files(file_list_convert.toString())
        return file_list_convert
    }

    get_audio_files(){
        return _root.app.get_audio_files()//will return all audio files in the playlist
    }



}