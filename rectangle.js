function rectangle(){
	var rectLength = document.getElementById('len').value;
	var rectWid = document.getElementById('rectWidth').value;
	
	var rectangleArea = rectLength*rectWid;
	var rectanglePerimeter = 2*(parseInt(rectLength)+parseInt(rectWid));
	
	document.getElementById('rectArea').value = rectangleArea;
	document.getElementById('rectPerimeter').value = rectanglePerimeter;
}