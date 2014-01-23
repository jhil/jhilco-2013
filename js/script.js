$(document).ready(function () {

	$('li').hover( 
		function() {
			$(this).siblings()
			.css('opacity','.5')
			.animate({'opacity': '.25'}, 0);
		},
		function() {
			$(this).siblings()
			.animate({'opacity': '1'}, 0);
		}
		);

})