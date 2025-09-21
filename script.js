document.addEventListener('DOMContentLoaded', function() {
  const desktopFilms = document.querySelectorAll('.filmDesktop');
  const desktopStill = document.querySelector('.default-still img');
  
  const mobileFilms = document.querySelectorAll('.film');
  const mobileStill = document.getElementById('still');
  
  const defaultImageSrc = 'images/bigWed.webp';
  
  if (desktopFilms && desktopStill) {
    desktopFilms.forEach(film => {
      film.addEventListener('mouseenter', function() {
        const imagePath = this.getAttribute('data-image');
        desktopStill.src = `images/${imagePath}`;
      });
      
      film.addEventListener('mouseleave', function() {
        desktopStill.src = defaultImageSrc;
      });
      
      film.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        window.location.href = url;
      });
    });
  }
  
  if (mobileFilms && mobileStill) {
    mobileFilms.forEach(film => {
      film.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        window.location.href = url;
      });
    });
  }
});
