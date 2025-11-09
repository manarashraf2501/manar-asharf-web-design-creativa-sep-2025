
document.querySelectorAll('.star-rating').forEach(rating => {
  const stars = rating.querySelectorAll('span');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const value = star.getAttribute('data-value');
      rating.setAttribute('data-rating', value);
      stars.forEach(s => s.classList.remove('active'));
      star.classList.add('active');
      let prev = star.nextElementSibling;
      while (prev) {
        prev.classList.add('active');
        prev = prev.nextElementSibling;
      }
    });
  });
});
