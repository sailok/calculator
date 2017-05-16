function myFunction(val) {
	
	document.getElementById("number").value+=val;
}

function myFunction2(val){
	document.getElementById("number").value=val;
}

function e(){
	try{
		myFunction2(eval(document.getElementById("number").value))
	}
	catch(e){
		myFunction2('Error')
	}
}