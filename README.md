jquery-pullulate
================

A jQuery plugin to pullulate (to sprout, bud, or germinate) textareas based on input 

Usage:

$(document).ready(function(){
  $( 'textarea' ).pullulate();
});

Options:

  hidden_div - the class added to the hidden HTML div that is used to calculate the height of the textarea
  height_padding - the padding added to the bottom of the text, helps prevent clipping and set initial size
  
  $(document).ready(function(){
    $( 'textarea' ).pullulate({'hidden_div' : 'myHiddenClassName', 'height_padding': 50});
  });

Contact:

Jay Sanders
opensource@mindtonic.net