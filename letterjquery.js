(function($){
	$(document).ready(function(){

		function c(){
	    	var n=$('.c').attr('id');
		    var c=n;
		    $('.c').text(c);
		    setInterval(function(){			        
		    	c--;
			    if(c>=0){
		            $('.c').text(c);
		        }
		        if(c==0){
		        	$(".result").text("Time Out!");
		        	$(".textarea").prop({disabled: true});
		        	$(".submit").prop({disabled: true});
		        	$(".letter").fadeOut(1500);
			       	$(".start").prop({disabled: false});
			        	// $(".c").text("0");
			    } 
			},1000);
		}

		var fulltext = "";
		var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		var text;

		$(".start").click(function(){	
			$(".start").prop({disabled: true});
			
			c();

			// Loop
			// setInterval(function(){
			//     // c();
			// },5000);		

			// $(".textarea").prop({disabled: false});
			$(".letter").each(function(i, element){		
				text = possible.charAt(Math.floor(Math.random() * possible.length));
				$(this).fadeIn(1000);
				$(element).text(text);
				fulltext += text;
			});
		});


		$(".submit").click(function(){
			var input = $(".textarea").val();
			if (input == fulltext){
				$(".result").text("You won!");
			}
			else {
				$(".result").text("You lost!");
			}
		});
	});
})(jQuery);