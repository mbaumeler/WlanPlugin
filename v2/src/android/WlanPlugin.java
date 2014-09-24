package ch.mbaumeler.phonegap.plugin.wlan;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;

import android.content.Context;
import android.net.wifi.WifiManager;

public class WlanPlugin extends CordovaPlugin {

	private WifiManager wifiManager;

	public void initialize(CordovaInterface cordova, CordovaWebView webView) {
		super.initialize(cordova, webView);
		this.wifiManager = (WifiManager) cordova.getActivity()
				.getSystemService(Context.WIFI_SERVICE);
	}

	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) {
		if (action.equals("disableWifi")) {
			wifiManager.setWifiEnabled(false);
			return true;
		} else if (action.equals("enableWifi")) {
			wifiManager.setWifiEnabled(true);
			return true;
		return false;
	}
}
