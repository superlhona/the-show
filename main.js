$(document).ready(function(){

	$(function(){
		$(".element").typed({
			strings: ["Kids..", "I'm going to tell you an incredible story.", "The story of how I met your mother..", "Click here to continue!"],
			typeSpeed: 0
		});
	});

	$( ".element" ).click(function() {
  	  $( "#tedmosby" ).show( "slow" );
 	  $( ".one" ).hide( "fast" ).queue( function() {
        $( "#intro" ).show( 2000 );
 
        // This tells jQuery to continue to the next item in the queue
        $( this ).dequeue();
    } );

  	});


// $( "#tedmosby" )
//     .animate( {
//         height: 150
//     }, "slow")
//     .queue( function() {
//         $( "#intro" ).fadeIn( "slow" );
 
//         // This tells jQuery to continue to the next item in the queue
//         $( this ).dequeue();
//     } );





	// $(".tedmosby").click(function(){
 //        var div = $("#intro");
 //        div.animate({height: 300}, "slow");
 //        div.animate({width: 300}, "slow");
 //        div.animate({height: 100}, "slow");
 //        div.animate({width: 100}, "slow");
	// });

	// $( ".element" ).click(function() {
	//   	$( "#tedmosby" ).show( "slow" );
	//   	$( ".one" ).hide( "fast" );
	//   	.queue(function() {
 //      $( this ).show( "#intro" ).dequeue();
 //    })
	// });

// 	$( document.body ).click(function() {
//   $( "div" )
//     .show( "slow" )
//     .animate({ left: "+=200" }, 2000 )
//     .queue(function() {
//       $( this ).addClass( "newcolor" ).dequeue();
//     })
//     .animate({ left: "-=200" }, 500 )
//     .queue(function() {
//       $( this ).removeClass( "newcolor" ).dequeue();
//     })
//     .slideUp();
// });



// 	$("#ted-1").click(function() {
//    		$( "#gf-1" ).fadeIn( "slow" ), function() {
//    			$("#intro-vic").show( "fast" );
//    		}
// 	});

// 	$("#ted-1").click(function() {
//    		$( "#gf-1" ).fadeIn( "fast" );
// 		$("#intro-vic").slideDown( "slow" );
//    		}
// 	});

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