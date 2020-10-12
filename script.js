$(document).ready(function() {

	setInterval(function() {
		const number = parseInt($('.number').text());
		if (number < 100) {
			$('.number').text(number + 1);
		}
	}, 50);

});
