document.addEventListener('DOMContentLoaded', function() {
  var burgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  );

  if (burgers.length === 0) {
    return;
  }

  burgers.forEach(function(burger) {
    burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      var menu = document.querySelector('.navbar-menu');
      if (menu) {
        menu.classList.toggle('is-active');
      }
    });
  });
});
