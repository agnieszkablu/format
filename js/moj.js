$(document).ready(function() {
	//button send form
	var buttons7Click = Array.prototype.slice.call( document.querySelectorAll( '#btn-click button' ) ),
		totalButtons7Click = buttons7Click.length
	buttons7Click.forEach( function( el, i ) { el.addEventListener( 'click', activate, false ); } );
	function activate() {
		var self = this, activatedClass = 'btn-activated';

		if( !classie.has( this, activatedClass ) ) {
			classie.add( this, activatedClass );
			setTimeout( function() { classie.remove( self, activatedClass ) }, 1000 );
		}
	}	//button end
	// menu animation
	$(window).scroll(function() {		
		var scroll = $(window).scrollTop();

		if (scroll >= 20) {
			$('nav.navbar').addClass('sticky');
			
		} else {
			$('nav.navbar').removeClass('sticky');
		}
	}); //end menu
	//bootstrap-carousel
	$('.carousel').carousel({
	  interval: 7000,
	  pause: false
	});
	//trailer
	var source1 = '<source src="img/video/duke.mp4" type="video/mp4"><source src="img/video/duke.webm" type="video/webm"> Your browser does not support the video tag.';
	var source2 = '<source src="img/video/starwars480p.mp4" type="video/mp4"><source src="img/video/starwars480p.webm" type="video/webm"> Your browser does not support the video tag.';
	var sourceInit ='<source src="img/video/witch.webm" type="video/webm"> <source src="img/video/witch.mp4" type="video/mp4"> <source src="img/video/witch.ogv" type="video/ogg"> Your browser does not support the video tag.';
	
	$('#videoSection button').click(showTrailer);
	function showTrailer(){	
		// var trailerTitle = $(this).html();
		// $('#trailerTitle').html(trailerTitle);
		//$('#videoBg1').fadeIn('4000', 'linear');
		var trailerTitle;
		var trailer = $(this).attr("id");
		if (trailer == 'duke'){
			$('#videoBg1').hide();
			$('#videoBg1').fadeIn('100000', 'linear');
			$('#videoBg1').html(source1);
			$('#videoBg1').load();
			trailerTitle = $('#trailerTitle2').html();
			$('#trailerTitleDisplay').html(trailerTitle);
		}else if (trailer == 'star'){
			$('#videoBg1').hide();
			$('#videoBg1').fadeIn('100000', 'linear');
			$('#videoBg1').html(source2);
			$('#videoBg1').load();
			trailerTitle = $('#trailerTitle3').html();
			$('#trailerTitleDisplay').html(trailerTitle);
		}else {
			$('#videoBg1').hide();
			$('#videoBg1').fadeIn('100000', 'linear');
			$('#videoBg1').html(sourceInit);
			$('#videoBg1').load();
			trailerTitle = $('#trailerTitle1').html();
			$('#trailerTitleDisplay').html(trailerTitle);
		}
	}

}); // end ready