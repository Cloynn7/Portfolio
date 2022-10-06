function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function scrollDown() {
    window.scrollBy(0, 800);
    behavior: 'smooth'
  }

  const mediaQuery = window.matchMedia('(min-width: 768px)')

  if (mediaQuery.matches) {
  function scrollDown() {
    window.scrollBy(0, 50);
    behavior: 'smooth'
  }
}