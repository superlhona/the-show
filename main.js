$(document).ready(function(){

	$( "#button-0" ).click(function(){
		$(".element").typed({
			strings: ["Kids..", "I'm going to tell you an incredible story.", "The story of how I met your mother..", "Click here to continue!"],
			typeSpeed: 0
		});
		$( "button" ).hide( "fast" );
	});

	$( ".element" ).click(function() {
	  $( "#ted-1" ).show( "slow" );
	  $( ".two" ).hide( "fast" );
	});

	$("#ted-1").click(function() {
   		$( "#gf-1" ).fadeIn( "slow" ), function() {
   			$("#intro-vic").show( "fast" );
   		}
	});

	$("#ted-1").click(function() {
   		$( "#gf-1" ).fadeIn( "fast" );
		$("#intro-vic").slideDown( "slow" );
   		}
	});

	// $(function(){
 //      $("#intro-vic").appear("fast");
	//   });


// $(".ted-1").on("click", function(){
//     $( "#gf-1" ).show( "slow", function(){
//         $("#intro-vic").show(); // or fadeIn(), show() ect..
//     });
// });

// $( ".ted-1" ).click(function() {
//     $( "#gf-1" ).show(), function(){
//         $("#intro-vic").show();
//     });
// });

});