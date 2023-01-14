window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
  
    fadeElements.forEach(el => {
      const fadePosition = el.offsetTop;
      const windowHeight = window.innerHeight;
  
      if (fadePosition < scrollTop + windowHeight && fadePosition > scrollTop) {
        el.style.opacity = 1;
      } else {
        el.style.opacity = 0;
      }
    });
  });