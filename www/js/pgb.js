function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function BusinessCard() {

	info =  'Roman Yurkevych' + '\n' +
	        'romuriy@gmail.com' + '\n' +
	        'www.cemoe.com' + '\n' +
	        'KrDUIs1012' + '\n' +
			'Applied Informatics UEK' + '\n' +

	navigator.notification.alert(info);
	
}