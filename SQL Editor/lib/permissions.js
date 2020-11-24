class Permissions{
    request_permission(PERMISSION){
        _root.app.request_permission(PERMISSION)
    }
    check_permission(PERMISSION){
        return _root.app.check_permission(PERMISSION)
    }
}