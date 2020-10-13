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
				$('.main').fadeIn('slow');
				$('.loader').remove();
			}, 1000);
		}
	}, 20);

	const t = $('.t');
	const f = $('.f');

	f.mouseenter(function() {
		t.text('Toi');
		f.text('Franck');
	});

	f.mouseleave(function() {
		t.text('Franck');
		f.text('Toi');
	});

	$('button').click(function() {
		setInterval(function() {
			window.open('//www.google.fr', '_blank');
		}, 1000);
		
	});

});
