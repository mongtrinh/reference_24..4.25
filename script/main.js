$('.btnCall').click(function () {
	$('.menuMo').addClass('on');
});
$('.close').click(function () {
	$('.menuMo').removeClass('on');
});

let offset = $('#header_wrap').offset();

console.log(offset.top);

$(window).scroll(function () {
	console.log($(document).scrollTop());
	if ($(document).scrollTop() > offset.top) {
		$('#header_wrap').addClass('on');
	} else {
		$('#header_wrap').removeClass('on');
	}
});
