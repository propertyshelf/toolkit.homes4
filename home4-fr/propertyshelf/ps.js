jQuery.fn.exists = function(){return this.length>0;};

$(document).ready(function () {
    if($('.portletAgentInformation .agency_logo').exists()){
        var logo = $('.portletAgentInformation .agency_logo');
        $('.portletAgentInformation .agency_logo').remove();
        $('.portletAgentInformation .portletItem').append(logo);
     }
    
    if($('.nav-over-carousel').exists()){
        if($("#ps-slider .carousel").exists()){
            $('.nav-over-carousel').addClass("carousel_active");
            $('.full-nav-over-carousel').addClass("carousel_active");
        }
    else{
        $('.nav-over-carousel').addClass("carousel_inactive");
        $('.full-nav-over-carousel').addClass("carousel_inactive");
        } 
    }
    
    $(window).resize(function(){
        if ($(window).width() < 980) {
            $(".socialbox").insertAfter("#header");
        }
        else{
            $(".socialbox").insertAfter(".after-social");
        }
    });
    
    
    
});