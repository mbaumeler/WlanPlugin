var wlan = {
    enable: function(enable, successCallback, errorCallback) {
        cordova.exec(
            successCallback, 
            errorCallback, 
            'WlanPlugin',
            'enableWifi', 
            []
        ); 
    },
	disable: function(enable, successCallback, errorCallback) {
        cordova.exec(
            successCallback, 
            errorCallback, 
            'WlanPlugin',
            'disableWifi', 
            []
        ); 
    }
}
module.exports = wlan;