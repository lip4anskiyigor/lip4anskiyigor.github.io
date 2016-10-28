
$('.menu_icon').click(function(){
	$('.menu').addClass('active');
	$("body").css({'overflow':'hidden'});
});
$('.exit-menu').click(function(){
	$('.menu').removeClass('active');
	$("body").css({'overflow':'visible'});
});







$('.send').click(function(){
	$('.send_popup').fadeIn('slow').addClass('active-popup');
	$("body").css({'overflow':'hidden'});
	return false;
});
$('.popup_close').click(function(){
	$('.send_popup').fadeOut('slow').removeClass('active-popup');
	$("body").css({'overflow':'visible'});
	return false;
});

$(".choose_button, .menu_wrap a").click(function() {
    $('html, body').animate({
        scrollTop: $(".choice").offset().top
    }, 1500);
});

if(window.matchMedia('(min-width: 1170px)').matches){
$(document).on('scroll', function () {

	var scrollTop = $(window).scrollTop();
	console.log(scrollTop);

	if(scrollTop >= 400 ){
		$('#small-header').slideDown("9000").addClass('active-header');
		
	}
	if(scrollTop <= 400 ){
		$('#small-header').slideUp("9000").removeClass('active-header');
		
	}

	});
}


$(document).on('scroll', function () {

	var scrollTop = $(window).scrollTop();
	console.log(scrollTop);

	if(scrollTop >= 2000 ){
		$('.torokhtiy_insta_wrap').addClass('torokhtiy_insta_wrap_bg');
	}
	});


$(function($){
	$.ajax({
		url: 'https://api.instagram.com/v1/users/1276686602/', // если ваше приложение прошло аппрув, вместо self можете указать ID пользователя
		dataType: 'jsonp',
		type: 'GET',
		data: {access_token: '1276686602.1677ed0.f5ca86504e2b4c90883fd81f8b773638'},
		success: function(response){
 			$('#insta_count').text(response.data.counts.followed_by); // количество подписчиков
			// $('#insta_count').text(response.data.counts.follows); // количество подписок
			// $('#insta_count').text(response.data.counts.media); // количество фото и видео в аккаунте
		}
	});
});