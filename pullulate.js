(function( $ ) {
  $.fn.pullulate = function(options) {

    // Default Settings
    var settings = $.extend( {
      'hidden_div' : 'pullulate-hiddendiv',
      'height_padding' : 20
    }, options);

    function swell(element) {
    	textarea = $(element);
    	hiddenDiv = textarea.siblings('.'+settings['hidden_div']);
	    hiddenDiv.html(textarea.val().replace(/\n/g, '<br>'));

	    textarea.css('height', hiddenDiv.height() + settings['height_padding']);
    }

    return this.each(function() {
    	textarea = $(this);
    
			textarea.addClass('pullulate');
	    var hiddenDiv = textarea.after($('<div>').attr({ 'class' : settings['hidden_div'] }));
	    swell(this);

			textarea.bind('keyup blur change', function() {
				swell(this);
			});
    });
  };
})( jQuery );