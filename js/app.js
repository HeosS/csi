var idiomaCont;
var delay = 200;
var n = 0;

$('.lente').hide();

$(document).ready(function(){
	setTimeout(function(){
		$('.loader').addClass('fade-out');
		ready();
	}, 1000);
});

function ready(){
	idiomaCont = $('.container .idioma').length;
	setTimeout(function(){
		inIdioma();
	}, 300);

	$('header, footer').removeClass('fade-out');
	$('.nav-phone').addClass('active');
	navPhone();
}

function inIdioma(){
	setTimeout(function(){
		$('.idioma').eq(n).removeClass('slide-top');
		if(n < idiomaCont){
			if(n == 2){
				$('.search').addClass('in');
			}
			if(n == 3){
				$('.perfil').addClass('in');
			}
			n++;
			inIdioma();
		}else{
			$('.container-contacto .button-contacto').addClass('in');
			$('.loader').remove();
			contacto();
			selectIdioma();
		}
	}, delay);
}

function outIdioma(){
	setTimeout(function(){
		$('.idioma').eq(n - 1).addClass('slide-top');
		if(n > 0){
			n--;
			outIdioma();
		}else{
			setTimeout(function(){
				$('.idioma').addClass('hide');
				$('.container').addClass('fade-in');
			}, 100);
			$('.container').addClass('color-' + classIdioma);
			$('.container-tab').removeClass('hide');
			modalBienvenida();
			chat();
		}
	}, delay);
}

var stateChat = false;
function chat(){
	$('.container-chat').addClass('active');
	$('.container-chat h2').on('click', function(){
		if(stateChat == false){
			$('.lente').fadeIn('slow');
			$('.container-chat').addClass('slide-top');
			stateChat = true;
		}else{
			$('.container-chat').removeClass('slide-top');
			$('.lente').fadeOut('slow');
			stateChat = false;
		}
	});
}

function modalBienvenida(){
	$('body').append('<div class="modal bienvenida">' + 
		'<h2>Bienvenido en idioma selecciondo</h2>' +
		'<p>Bienvenido a la web de Dollenz E-Siste en donde usted podrá acceder a diferentes servicios.</p>' + 
		'<button type="submit" class="btn default-1 pull-right">OK</button>' +
		'</div>');

	setTimeout(function(){
		$('.modal').addClass('active');
	}, 100);

	$('.modal.bienvenida button[type="submit"]').on('click', function(){
		$('.modal').removeClass('active');
		setTimeout(function(){
			$('.container-tab').addClass('active');
			$('.content-tab .content').eq(0).addClass('visited');
			$('.modal').remove();
		}, 600);
		tabs();
		modalInfo();
	});
}

function contacto(){
	var statusContact = false;
	$('.container-contacto .button-contacto, .container-contacto .button-volver').on('click', function(){
		if(statusContact == false){
			$('.lente').fadeIn('slow');
			$('.container-contacto').addClass('active');
			$('.button-contacto').children('.fa').addClass('fa-rotate-180');
			statusContact = true;
		}else{
			$('.lente').fadeOut('slow');
			$('.container-contacto').removeClass('active');
			$('.button-contacto').children('.fa').removeClass('fa-rotate-180');
			statusContact = false;
		}
	});
}

var classIdioma;
function selectIdioma(){
	$('.idioma').on('click', function(){
		classIdioma = $(this).index();
		outIdioma();
	});
}

function tabs(){
	$('ul.nav-tabs').each(function(){
    	var $active, $content, $links = $(this).find('a');
    
		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    	$active.addClass('active');

    	$content = $($active[0].hash);

    	$links.not($active).each(function () {
      		$(this.hash).hide();
    	});

    	$(this).on('click', 'a', function(e){
      		$active.removeClass('active');
      		$content.hide().removeClass('visited');
				
      		$active = $(this);
      		$content = $(this.hash);

      		$active.addClass('active');
      		$content.show().addClass('visited');

     		e.preventDefault();
    	});
  	});
}

function modalInfo(){
	$('.content-info').on('click', function(){
		var title = $(this).text();
		var color = $(this).data('color')
		$('.lente').addClass('up').fadeIn('slow');
		$('body').append('<div class="modal info">' + 
			'<h2 class="' + color + '">' + title + '</h2>' +
			'<div class="content-modal">' +
			'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum, nulla sed egestas ornare, nisl est bibendum metus, sit amet aliquam ipsum tortor id mauris. Vivamus auctor, justo a bibendum auctor, odio odio placerat mauris, nec iaculis elit ipsum sed elit. Ut quis diam nibh. Praesent sit amet tristique massa. Sed id justo et urna porta fermentum nec venenatis est. Donec suscipit pellentesque odio ac facilisis. In laoreet mi quis quam ultricies, ut varius odio aliquam. In justo ex, bibendum et eros sit amet, fringilla mollis tellus. Aliquam tempor lectus sem, ut porta sapien volutpat ac. In ultricies facilisis eleifend.</p>' +
			'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum, nulla sed egestas ornare, nisl est bibendum metus, sit amet aliquam ipsum tortor id mauris. Vivamus auctor, justo a bibendum auctor, odio odio placerat mauris, nec iaculis elit ipsum sed elit. Ut quis diam nibh. Praesent sit amet tristique massa. Sed id justo et urna porta fermentum nec venenatis est. Donec suscipit pellentesque odio ac facilisis. In laoreet mi quis quam ultricies, ut varius odio aliquam. In justo ex, bibendum et eros sit amet, fringilla mollis tellus. Aliquam tempor lectus sem, ut porta sapien volutpat ac. In ultricies facilisis eleifend.</p>' +
			'<hr>' +
			'<button type="button" class="btn default-1">PDF</button>' +
			'<br><br>' +
			'<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit <div class="btn-group btn link inline-btn"><select class="select-btn"><option value="1">Opción 1</option><option value="2">Opción 2</option><option value="3">Opción 3</option><option value="4">Opción 4</option></select></div></div>' +
			'<br><br>' +
			'<button type="submit" class="btn default-1 pull-right btn-xl">OK</button>' +
			'</div>' +
			'</div>');

		setTimeout(function(){
			$('.modal').addClass('active');
		}, 100);
		closeModalInfo();
	});
}

function closeModalInfo(){
	$('.lente.up, .modal.info button[type="submit"]').on('click', function(){
		$('.lente').fadeOut('slow');
		$('.lente').off();
		$('.modal').removeClass('active');
		setTimeout(function(){
			$('.modal').remove();
			$('.lente').removeClass('up');
		}, 600);
	});
}

function navPhone(){
	var statusContact = false;
	$('.contacto-menu').on('click', function(){
		if(statusChat == true){
			$('.container-chat').removeClass('active-phone');
			statusChat = false;
		}
		if(statusContact == false){
			$('.nav-phone li').removeClass('active');
			$('.container-contacto').addClass('active');
			$(this).addClass('active');
			statusContact = true;
		}
	});

	$('.home-menu').on('click', function(){
		if(statusContact == true){
			$('.nav-phone li').removeClass('active');
			$(this).addClass('active');
			$('.container-contacto').removeClass('active');
			statusContact = false;
		}

		if(statusChat == true){
			$('.nav-phone li').removeClass('active');
			$(this).addClass('active');
			$('.container-chat').removeClass('active-phone');
			statusChat = false;
		}
	});

	var statusChat = false;
	$('.chat-menu').on('click', function(){
		if(statusContact == true){
			$('.container-contacto').removeClass('active');
			statusContact = false;
		}
		if(statusChat == false){
			$('.nav-phone li').removeClass('active');
			$(this).addClass('active');
			$('.container-chat').addClass('active-phone');
			statusChat = true;
		}
	});
}