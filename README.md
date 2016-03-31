# jquery.animateBro

    // Load animateBro with options object
	animateBro.load({
        'minViewportHeight': 768,
        'maxViewportHeight': 1440,
		'elements': [
			{
				'element': '.section-areas ul.list-areas',
				'hook': '.section-areas ul.list-areas',
				'effect': 'fadeInUp'
			},
			{
				'element': '.section-latest ul.list-latest',
				'hook': '.section-latest ul.list-latest',
				'effect': 'slideInUp'
			},
		]
	});
