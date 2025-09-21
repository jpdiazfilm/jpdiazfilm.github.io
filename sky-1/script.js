document.addEventListener('DOMContentLoaded', function() {
  const desktopFilms = document.querySelectorAll('.filmDesktop');
  const desktopStill = document.querySelector('.default-still img');
  const desktopStillContainer = document.querySelector('.default-still');
  
  // Images to cycle through
  const images = ["1", "2", "3", "4", "5"];
  const mobileStillContainer = document.querySelector('.mobile-still');
  const mobileStill = document.getElementById('still');
  
  let currentImageIndex = 0;
  let isAnimating = false;
  
  const createCrossfadeElementMobile = () => {
    if (!mobileStillContainer) return;
    
    const newImage = document.createElement('img');
    newImage.id = 'still-next';
    newImage.alt = 'Next Still';
    newImage.style.position = 'absolute';
    newImage.style.top = '0';
    newImage.style.left = '0';
    newImage.style.width = '100%';
    newImage.style.height = '100%';
    newImage.style.objectFit = 'cover';
    newImage.style.opacity = '0';
    newImage.style.transition = 'opacity 0.8s ease-in-out';
    
    mobileStillContainer.style.position = 'relative';
    mobileStillContainer.appendChild(newImage);
    
    return newImage;
  };

  const createCrossfadeElementDesktop = () => {
    if (!desktopStillContainer) return;
    
    const newImage = document.createElement('img');
    newImage.id = 'still-next';
    newImage.alt = 'Next Still';
    newImage.style.position = 'absolute';
    newImage.style.top = '0';
    newImage.style.left = '0';
    newImage.style.width = '100%';
    newImage.style.height = '100%';
    newImage.style.objectFit = 'cover';
    newImage.style.opacity = '0';
    newImage.style.transition = 'opacity 0.8s ease-in-out';
    
    desktopStillContainer.style.position = 'relative';
    desktopStillContainer.appendChild(newImage);
    
    return newImage;
  };
  
  const crossfadeImageMobile = mobileStill ? createCrossfadeElementMobile() : null;
  const crossfadeImageDesktop = desktopStill ? createCrossfadeElementDesktop() : null;
  
  const changeImage = (nextIndex) => {
    if (isAnimating || !mobileStill || !crossfadeImageMobile || !desktopStill || !crossfadeImageDesktop) return;
    
    isAnimating = true;

    crossfadeImageMobile.src = `../images/sky1/${images[nextIndex]}.webp`;
    crossfadeImageDesktop.src = `../images/sky1/${images[nextIndex]}.webp`;
    
    crossfadeImageMobile.onload = () => {
      
      crossfadeImageMobile.style.opacity = '1';
      crossfadeImageDesktop.style.opacity = '1';
      
      setTimeout(() => {
        mobileStill.src = crossfadeImageMobile.src;
        desktopStill.src = crossfadeImageDesktop.src;
        
        crossfadeImageMobile.style.opacity = '0';
        crossfadeImageDesktop.style.opacity = '0';
        
        isAnimating = false;
      }, 800);
    };
    
    setTimeout(() => {
      if (isAnimating) {
        mobileStill.src = crossfadeImageMobile.src;
        desktopStill.src = crossfadeImageDesktop.src;
        crossfadeImageMobile.style.opacity = '0';
        crossfadeImageDesktop.style.opacity = '0';
        isAnimating = false;
      }
    }, 1000);
    
    currentImageIndex = nextIndex;
  };
  
  const startAutoCycle = () => {
    return setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      changeImage(nextIndex);
    }, 3000);
  };


  
  let autoCycleInterval = startAutoCycle();
  
});
