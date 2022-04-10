function result()  {
	var number1 = document.getElementById("num1").value;
	var number2 = document.getElementById("num2").value;
	var oper = document.getElementById("operator").value;
	switch(oper) {/*swiitch for the choosen operator*/
		case "1":/*addition*/
		var answer = (+number1) + (+number2);
		alert("THE SUM IS "+answer);
		break;
		case "2": /*subtraction*/
		var answer = number1 - number2;
		alert("THE DIFFERENCE IS "+answer);
		break;
		case "3": /*multiplication*/
		var answer = number1 * number2;
		alert("THE PRODUCT IS "+answer);
		break;
		case "4":/*division*/
		var answer = number1 / number2;
		alert("THE QUOTIENT IS "+answer);
		break;
		case "5":/*modulos*/
		var answer = number1 % number2;
		alert("THE REMAINDER IS "+answer);
		break;
		default:
		alert("PLEASE TRY AGAIN");
		break;
	}
}	