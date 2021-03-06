/////////////////////////////////////////////////////////////////////////////////////////////
// WG JS
/////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $('.headerMatch').matchHeight();
    function mobileMatch(){
        if($(window).width()<992){
            $('.split-nav-logo-desktop').prependTo('.split-nav-logo-mobile')
        }else{
            $('.split-nav-logo-desktop').prependTo('.split-nav-logo')
        }
    }
    mobileMatch();
    $(window).resize(mobileMatch);
    function vertNavHeight(){
        var logoHeight=$('.split-nav-logo img').height();
        if($(window).width()>767){
            $('.vert-nav').css('height',logoHeight+60)
        }else{
            $('.vert-nav').css('height','auto')
        }
    }vertNavHeight();
    $(window).resize(vertNavHeight);
    function vertNavRightHeight(){
        var logoHeight1=$('.logo-l9 img').height();
        if($(window).width()>991){
            $('.vert-nav-whole-9').css('height',logoHeight1+60)
        }else{
            $('.vert-nav-whole-9').css('height','auto')
        }
        var logoHeight2=$('.logo-l10 img').height();
        if($(window).width()>991){
            $('.vert-nav-whole-10').css('height',logoHeight2+60)
        }else{
            $('.vert-nav-whole-10').css('height','auto')
        }
    }
    vertNavRightHeight();
    $(window).resize(vertNavRightHeight);
    $('body').append('<div id="toTop"><i class="icon-chevron-up fa fa-chevron-up"></i></div>');
    $(window).scroll(function(){
        if($(this).scrollTop()!=0){
            $('#toTop').fadeIn()
        }else{
            $('#toTop').fadeOut()
        }
    });
    $('#toTop').click(function(){
        $('body,html').animate({scrollTop:0},600)
    })
});