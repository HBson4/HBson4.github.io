$(document).ready(function() {
    adjustSectionHeight(); // Call on page load
  
    $(window).resize(function() {
      adjustSectionHeight(); // Call on window resize
    });
  
    function adjustSectionHeight() {
      $('.parallax-section').each(function() {
        var sectionHeight = $(this).height();
        var contentHeight = $(this)[0].scrollHeight;
        
        // Check if content overflows
        if (contentHeight > sectionHeight) {
          $(this).css('min-height', contentHeight + 'px'); // Adjust min-height
        } else {
          $(this).css('min-height', '80vh'); // Reset to 100vh if no overflow
        }
      });
    }
  });