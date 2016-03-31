// animateBro
(function( animateBro, $, undefined ) {

	/*

	Dependencies:
	jQuery
	offsetKitty
	animate.css

	*/

	// Define config var
	animateBro.config;

	// Functions to run on load
	animateBro.load = function(options) {
		// Define default plugin config
		var defaults = {
			'minViewportHeight': 768,
			'maxViewportHeight': 1440,
			'elements': []
		};

		// Update plugin config with options
		animateBro.config = $.extend({}, defaults, options);

		// If we have elements to animate
		if(animateBro.config['elements'].length > 0) {
			// Init animations
			animateBro.init();
		}
	};

	animateBro.init = function() {
		// Only allow on specified viewports
		if (
			$(window).height() >= animateBro.config['minViewportHeight'] &&
			$(window).height() < animateBro.config['maxViewportHeight']
		) {
			// Loop through elements array
			$.each(animateBro.config['elements'], function (index, value) {
				// Check if element exists on page
				if ($(value['element']).length) {
					// Check if element if below viewport
					if (offsetKitty.viewport(value['hook']).top > $(window).scrollTop()) {
						// Set opacity to 0
						$(value['element']).css({'opacity': 0});
					}
				}
			});
		}
	};

	// Function to run on scroll
	$(window).scroll(function() {
		if(animateBro.config['elements'].length > 0) {
			// Loop through elements array
			$.each(animateBro.config['elements'], function (index, value) {
				// Check if element exists on page
				if ($(value['element']).length) {
					// If hook enters viewport + element is hidden
					if (offsetKitty.viewport(value['hook']).insideViewport && $(value['element']).css('opacity') == 0) {
						// Add animateBro.css effect classes
						$(value['element']).addClass('animated ' + value['effect']);
						// Remove opacity 0 style
						$(value['element']).css({'opacity': ''});
					}
				}
			});
		}
	});

}( window.animateBro = window.animateBro || {}, jQuery ));
