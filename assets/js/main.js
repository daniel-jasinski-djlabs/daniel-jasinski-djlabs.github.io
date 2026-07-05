// DJLabs — minimal site JS
(function() {
  var nav = document.querySelector('.mobile-nav');
  var toggle = document.querySelector('.nav-toggle');

  // Toggle mobile nav
  if (toggle && nav) {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      nav.classList.toggle('is-open');
      document.body.classList.toggle('nav-open', nav.classList.contains('is-open'));
    });
  }

  // Close mobile nav when a link is clicked
  if (nav) {
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('is-open');
        document.body.classList.remove('nav-open');
      });
    });
  }
})();
