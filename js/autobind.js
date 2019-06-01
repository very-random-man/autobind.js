$( document ).ready(function() {

  // Iterate over all elements with autobind data attributes.
  $('[data-autobind]').each(function() {

    // Extract data from element.
    var $element = $(this);
    var event_name = $element.data('autobind');

    // Prepare data to be passed to the event handler.
    var autobind_data = {
      classes: $element.data('autobind-classes'),
      selector: $element.data('autobind-selector'),
      prevent: $element.data('autobind-prevent'),
    };

    // Bind defined event to element.
    $element.on(event_name, autobind_data, function(e) {

      // If specified, prevent default behaviour.
      if (e.data.prevent !== undefined) {
        e.preventDefault();
      }

      // If a selector has been specified, use that, else apply to the triggering element.
      var selector = e.data.selector !== undefined ? e.data.selector : this;

      // Toggle class(es) when event triggered.
      $(selector).toggleClass(e.data.classes);
    });

  });


});