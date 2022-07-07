function add()
{
	var num = document.getElementById('num').value;
	var res = 2* num;
	console.log(res);
	
}
function clearfun()
{
	document.getElementById('num').value= "";

}
function double()
{
	var num = document.getElementById('num').value;
	var res = num * 2;
	//belo statement is uset for print the result in text box
	//document.getElementById('num').value= res;
	
	//below statement is used to print the result on same web page using apan tag.
	document.getElementById('result').textContent= 'Result is:'+res;
	
	
	
}