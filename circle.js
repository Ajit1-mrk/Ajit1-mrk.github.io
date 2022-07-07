function circleAreaPerimeter(){
	
	var radius = document.getElementById('circleradius').value;
	var area = 3.14*radius*radius;
	var perimeter = 2*3.14*radius;
	
	document.getElementById('circleArea').value = area;
	document.getElementById('circlePerimeter').value = perimeter;
	
	
}