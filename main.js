$(document).ready(function(){

	$( "#button-0" ).click(function(){
		$("element").typed({
			strings: ["Kids..", "I'm going to tell you an incredible story.", "The story of how I met your mother..", "Click here to continue!"],
			typeSpeed: 0
		});
		$( "button" ).hide( "fast" );
	});

	$( ".element" ).click(function() {
	  $( "#ted-1" ).show( "slow" );
	  $( ".element" ).hide( "fast" );
	});

	$("#ted-hello").click(function() {
   		$( "#ted-hello-again" ).fadeIn( "slow" );
});


});