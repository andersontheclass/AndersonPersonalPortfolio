$(document).ready(function(){

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
    
    //
});