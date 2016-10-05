$(document).ready(function(){

	$(function(){
		$(".element").typed({
			strings: ["Kids..", "I'm going to tell you an incredible story.", "The story of how I met your mother..", "Click here to continue!"],
			typeSpeed: 0
		});
	});

	$( ".element" ).click(function() {
  	  $( "#tedmosby" ).slideDown( "slow" );
 	  $( ".one" ).hide( "fast" ).queue( function() {
        $( "#intro" ).show( 10 );

        $( this ).dequeue();
    } );

  	});

  		$("#intro").click(function() {
  			$("#tedmosby").hide( "fast" );
   			$( "#gf-1" ).slideDown( "slow" );
   			$("#intro").hide( "fast" );
	});

  			$("#gf-1").hover(function() {
  			$("#intro-vic").show( "fast" );
	});

  	$("#intro-vic").click(function() {
  			$("#gf-1").hide( "fast" );
   			$("#gf-2").animate({width:'toggle'},350);
   			$("#intro-vic").hide( "fast" );
   			$("#intro-robin").animate({width:'toggle'},500);
	});

  		$("#intro-robin").click(function() {
  			$("#gf-2").hide( "fast" );
   			$( "#gf-3" ).slideDown( "slow" );
   			$("#intro-robin").hide( "fast" );
	});

  			$("#gf-3").hover(function() {
  			$("#intro-stella").show( "fast" );
	});

  		$("#intro-stella").click(function() {
  			$("#gf-3").hide( "fast" );
   			$("#gf-4").animate({width:'toggle'},350);
   			$("#intro-stella").hide( "fast" );
   			$("#intro-zoey").animate({width:'toggle'},500);
	});

  		$("#intro-zoey").click(function() {
  			$("#heart").show("fast");
  			$("#gf-4").hide( "fast" );
   			$("#wife").animate({width:'toggle'},800);
   			$("#intro-zoey").hide( "fast" );
   			$("#intro-wife").animate({width:'toggle'},1200);
   			var div = $("#heart");
	        // div.animate({left: '100px'}, "slow");
    });

});