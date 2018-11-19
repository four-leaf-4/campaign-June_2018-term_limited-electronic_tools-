/*---------------------------------------------
	scrollin
  ---------------------------------------------*/

(jQuery)(function($) {
    $(window).scroll(function (){
        $('div[class^=campaign_items_list_]').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
			if( scroll == 0 ){
				$(this).removeClass('scrollin');
			}
            else if (scroll > elemPos - windowHeight + 100 ){
                $(this).addClass('scrollin');
            }
        });
    });
});

