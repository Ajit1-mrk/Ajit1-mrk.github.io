function countCI(){
	
	var principle = document.getElementById("principle");
	var roi = document.getElementById("roi");
	var years = document.getElementById("years");

	
	
	p = parseFloat(principle.value);
	r = parseFloat(roi.value);
	t = parseFloat(years.value);
	ci = p*(Math.pow((1+r/100),t));

	
	document.getElementById('interest').value = ci;

}