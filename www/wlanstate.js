var wlanState = {
    offline: function(enable, successCallback, errorCallback) {
        cordova.exec(
            successCallback, 
            errorCallback, 
            'OfflinePlugin',
            'disableWifi', 
            [{                  
                "status": enable
            }]
        ); 
    }
}
module.exports = wlanState;