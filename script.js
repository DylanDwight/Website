document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('resetZoomButton');
  
  button.addEventListener('click', function() {
    // Reset zoom to 100%
    document.body.style.zoom = '100%';

    
  });
});