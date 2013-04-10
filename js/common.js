$(document).ready(function(){
	//scripts go below
	$("#contactname").val("Please enter full name");
	$("#telephone").val("Incl local dialing code");
	$("#eventdate").val("Format DDMMYYYY");
	$("#details").val("The more you can enter here, the less we have to check with you :)");
	$("input, textarea").focus(function(){
		$(this).select();
	});
});
