var wlan = {
    enable: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, 
            errorCallback, 
            'WlanPlugin',
            'enableWifi', 
            []
        ); 
    },
	disable: function(successCallback, errorCallback) {
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
