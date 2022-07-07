function squareCalculator(){
	
	var squeareLength = document.getElementById('len').value;
	
	var squArea = squeareLength*squeareLength;
	var squPerimeter = 4*squeareLength;
	
	document.getElementById('squareArea').value = squArea;
	document.getElementById('squarePerimeter').value = squPerimeter;
}