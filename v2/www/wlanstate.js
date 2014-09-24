var wlanState = {
    offline: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, 
            errorCallback, 
            'WlanPlugin',
            'disableWifi', 
            []
        ); 
    },
	 online: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, 
            errorCallback, 
            'WlanPlugin',
            'enableWifi', 
            []
        ); 
    }
}
module.exports = wlanState;