window.addEventListener('scroll', function() {
  var page2 = document.getElementById('page2');
  var scrollPosition = window.scrollY; // Get the current scroll position
  
  // Assuming page2 is at the 2nd section, you can customize the trigger point based on your layout
  var triggerPoint = page2.offsetTop - window.innerHeight / 2; 
  
  if (scrollPosition >= triggerPoint) {
    // Change background when scrolling to or past page2
    page2.style.background = 'linear-gradient(to bottom, #292929, #828282, #828282)';
  } else {
    // Reset the background when scrolling up
    page2.style.background = 'linear-gradient(to bottom, #1C1C1C, #292929, #828282)';
  }
});