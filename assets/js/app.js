$(document).foundation()

$('.toggle-button').on('click', function(){
    $('.off-canvas').toggle( "slide" );
    $('.off-canvas-exit').show();
});

$('.close-button, .off-canvas-exit').on('click', function(){
    $('.off-canvas').toggle( "slide" );
    $('.off-canvas-exit').hide();
});