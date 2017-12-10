

/**
 * JavaScript for the Car insurances (page2)
 */







function Calcu(){

																	 // Variables // Variables // Variables // Variables // Variables // Variables // Variables
	var Name = document.getElementById("myInputn").value,           // Variables // Variables // Variables // Variables // Variables // Variables
		 Age = document.getElementById("myInputa").value,		   // Variables // Variables // Variables // Variables // Variables
		 HorsePower = document.getElementById("myInputh").value,  // Variables // Variables // Variables // Variables
		 R1 = (HorsePower * 100)/Age + 150 ,					 // Variables // Variables // Variables
		 R2 =  parseFloat(R1),								    // Variables // Variables
		 R3 = R2.toPrecision(5);							   // Variables 





		 if ( Age==0 || HorsePower==0 ){						// My if Condition

		 	document.getElementById("R3").innerHTML=" Enter the Age or the Horse power please !"

		 } else if (HorsePower < 0){

		 	document.getElementById("R3").innerHTML= " Check the Horse power !"

		 } else if (Age < 16 ) {
			document.getElementById("R3").innerHTML = " you are under Age !"
		 	
		 }else if (Name==0){

		document.getElementById("R3").innerHTML = "Hi , " + "Guest"+  " <br/> " + " The price for your car Insurance is " + R3 + " $ pro year "  ;

		 }
		  else{ 

		document.getElementById("R3").innerHTML = "Hi , " + Name +  " <br/> " + "The price for your car Insurance is " + R3 + " $ per year "  ;


		 }
		
}