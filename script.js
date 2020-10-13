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
	}, 50);

	const t = $('.t');
	const f = $('.f');

	f.mouseenter(function() {
		t.html('<i class="fas fa-poop"></i> Cédric <i class="fas fa-poop"></i>');
		f.html('<i class="fas fa-star"></i> Franck <i class="fas fa-star"></i>');
	});

	f.mouseleave(function() {
		t.html('<i class="fas fa-star"></i> Franck <i class="fas fa-star"></i>');
		f.html('<i class="fas fa-poop"></i> Cédric <i class="fas fa-poop"></i>');
	});

	$('button').click(function() {
		alert("Franck ? Bah oui c'était logique, je te donne une récompense.");
		const url = 'buhnrop';
		const ref = '//www.' + url.split('').reverse().join('') + '.com';
		//window.open('//www.' + url.split('').reverse().join('') + '.com', '_blank');
		alert('League of Legends jeu de merde');
		window.location.href = ref;
	});

});
