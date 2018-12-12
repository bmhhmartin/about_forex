$(document).on("click",".btn-default",function(){
  $(".collapse").removeClass('in');
  $(".btn-default").attr("aria-expanded","false");

  
});

$(document).on("click",".t-btn",function(){
  $(".collapse").removeClass('in');
  $(".t-btn").attr("aria-expanded","false");
  $(".t-btn").removeClass("active");
 $(this).addClass("active");
  
});


$(function() {

	$('#toolbarCollapseReplenish .tabs > div').click(function() {

		var index = $(this).index();

		$('.tab_sections > div').removeClass('active');
		$('.tab_sections > div:eq('+index+')').addClass('active');

		$('.tabs > div').removeClass('active');
		$(this).addClass('active');

		return false;
	});
});

 $('.responsive').slick({
            dots: false,
            infinite: true,
            speed: 300,
            arrows: true,
            autoplay:true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 991,
                  dots: false,
                  arrows: true,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
              {
                breakpoint: 767,
                settings: {
                  arrows: true,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
            ]
          });