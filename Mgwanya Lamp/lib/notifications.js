class Notification{
    toast(message,duration){
        _root.app.toast(message,duration)
    }

    show_notification(message, title, subtitle){
        _root.app.show_simple_notification(message,title || _root.app.get_app_name(),subtitle || "")
    }

    show_advanced_notification(notification_manager){
        _root.app.show_advanced_notification(JSON.stringify(notification_manager));
    }
}

class NotificationManager{
    constructor(notification_title, notification_message, notification_icon, notification_on_click){
        this.notification_title = notification_title;
        this.notification_message = notification_message;
        this.notification_icon = notification_icon;
        this.notification_on_click = notification_on_click || this.on_notification_click(this);
    }

    on_notification_click(nm){
        //the default notification manager onclick method
        _root.app.start_new_view()
        //how ever, if you ovveride this method, you can open any method you want from this 
        //line of code.
    }
}