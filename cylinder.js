function cylinder(){
	
	var cylRadVar = document.getElementById('cylRadius').value;
	var cylHeightVar = document.getElementById('cylHeight').value;
	
	var cylinderArea = 2*3.14*cylRadVar*cylHeightVar;
	var cylinderVolume = 3.14*cylRadVar*cylRadVar*cylHeightVar;
	
	document.getElementById('cylArea').value = cylinderArea;
	document.getElementById('cylVolume').value = cylinderVolume;
}