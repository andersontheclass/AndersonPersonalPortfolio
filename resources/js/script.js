$(document).ready(function(){
    
    // sticky nav
    $('.js--section-project').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    // Show more and Show less <button> functionality
    $('#toggleButton').click(function() {
        var button = this;
        $('.js--show-more').slideToggle('slow', function() {
            if($('.js--show-more').is(':visible')) {
                $('span', button).text('... Show less');
                $('.section-album-info').css('margin-bottom', '4rem');
            }
            else {
                $('span', button).text('Show more ...');
            }
        });    
    });
    
    /* Navigation scroll */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});