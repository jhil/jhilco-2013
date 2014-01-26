$(document).ready(function () {

	$('li').hover( 
		function() {
			$(this).siblings()
			.css('opacity','.5')
			.animate({'opacity': '.35'}, 0);
		},
		function() {
			$(this).siblings()
			.animate({'opacity': '1'}, 0);
		}
		);

// jQuery hover swap text @ http://perishablepress.com/jquery-hover-swap-text/
function xycss_swap_text(){
	$('a').hover(function(){
		var description = $(this).attr('description');
		var text  = $(this).text();
		$("#stuff h1").text(description).attr('rel', text).removeAttr('description').wrapInner('<span />');

	},function(){
		var description = $(this).text();
		var text  = $(this).attr('rel');
		$("#stuff h1").text(text).attr('hello', hello);
	});
}
$(document).ready(function(){
	xycss_swap_text();
});

})