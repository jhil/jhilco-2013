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

function xycss_swap_text(){
	$('a').hover(function(){
		var description = $(this).attr('description');
		var text  = $(this).text();
		console.log(text);
		$("#stuff h1").text(description).attr('rel', text).removeAttr('description').wrapInner('<span />');

	},function(){
		var description = $(this).text();
		var text  = $(this).attr('rel');
		$("#stuff h1").text('a place for my stuff');
	});
}
$(document).ready(function(){
	xycss_swap_text();
});

})