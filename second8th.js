


function new2Fun(){
	
	
	var b = document.getElementById('num2').value;
	
	var a = document.getElementById('num1').value;
	
	var str = '<table class="table table-striped">';
	
	str =str + '<th>Table value you entered : '+a+'</th><th>Index value you entered : '+b+'</th><th></th><th></th><th></th>';

	for(i=1;i<=b;i++){

		str =str + '<tr><td>'+ i +'</td><td>'+'*'+'</td><td>'+ a +'</td><td>'+'='+'</td><td>'+(i*a)+'</td></tr>';
		
	}

	str =str + '</table>';
	
	document.getElementById('id2').innerHTML= str;
	
	
	
}