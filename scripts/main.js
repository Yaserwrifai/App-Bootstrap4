$(function () {
    // Initialize all tooltips
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Handle copy and change tooltip text
  document.querySelectorAll('.btn-copy').forEach(function(button) {
    button.addEventListener('click', function () {
      var textarea = this.nextElementSibling;
      textarea.select();
      document.execCommand('copy');

      // Change tooltip text to "Copied!"
      $(this).attr('data-original-title', 'Copied!').tooltip('show');

      // After 2 seconds, reset tooltip to "Copy to clipboard"
      setTimeout(() => {
        $(this).attr('data-original-title', 'Copy to clipboard');
      }, 2000);
    });
  });