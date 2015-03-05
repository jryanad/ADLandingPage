$(document).ready(function(){

	$(".ppc-form").submit(function(){
			
	$(".loading").show();
	
	var str = $(this).serialize();

		$.ajax({
			type: "POST",
			url: "form-handler.php",
			data: str,
			success: function(msg) {
				$(document).ajaxComplete(function(event, request, settings) {

					if(msg == 'OK') {
						result = '<div class="notification-ok"><span>Your message has been sent. Someone will contact you shortly, Thank you!</span></div>';
						$(".ppc-form").trigger("reset").hide();
					}
					else {
						result = msg;
					}
						
					$(".loading").hide();
					$(".note").html(result);
				});
			}
		});
	return false;
	});
});