//alert("i am in");
//$("li").click() instead of this below

//important must 
$("ul").on("click","li", function(){
	    
	  //alert($(this).css("color"));
	// if($(this).css("color") === "rgb(0, 0, 0)")
	// {

	// 	$(this).css("textDecoration","line-through");
	//     $(this).css("color","gray");
	// }else
	// {
	// 	$(this).css("textDecoration","none");
	//     $(this).css("color","black");
	// }

	//same functionality as above code
	 
    $(this).toggleClass("completed");
   
		
});


//stopPropagation
//CAN USE CLICK() BUT NO APPLY ON CONTENT WHICH 
//ARE CREATE DYNAMICALLY
$("ul").on("click",".del",function(event){

	 //$(this).parent().remove();
	 $(this).parent().fadeOut(100, function()
	 	{
	 		$(this).remove();
	 	});
	//important
	event.stopPropagation();
});



$("input[type=text]").keypress(function(event){
	if(event.charCode === 13)
	{
		// var x=$("input[type=text]").val();
		var x=$(this).val();
		// alert(x);
		$(this).val("");
		$("ul").append("<li><span class='del'><i class='fas fa-trash'></i></span><span class='done'><i class='fas fa-check'></i></span>" +x+" <li>");
		


	}
});