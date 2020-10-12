$(document).ready(function() {

	setInterval(function() {
		const number = parseInt($('.number').text());
		if (number < 100) {
			$('.number').text(number + 1);
		} else {
			$('.n-div, .caveman').fadeOut('slow');
			setTimeout(function() {
				$('.back').removeClass('back-one');
				$('.bg-two').removeClass('bg-one');
				$('.loader').remove();
			}, 1000);
		}
	}, 50);

});
