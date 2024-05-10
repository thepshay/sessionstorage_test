window.addEventListener('load', () => {
  if (sessionStorage.getItem('tagged')) {
    document.body.style.backgroundColor = 'red';
  }
});
