//
// This is The Scripts used for Simply Theme
//
function main() {
	(function () {
		'use strict'
		//Script
		//-----------------------------------
		jQuery(document).ready(function ($) {
			var wd = $(window).width();

			var wd = jQuery(window).width();


			$(".hambuger-mobile").on("click", function () {
				$(this).toggleClass("exit");
				$(".site-nav").slideToggle();
			});

		});




	}());
}
main();