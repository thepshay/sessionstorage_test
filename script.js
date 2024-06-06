window.addEventListener('load', () => {
  if (sessionStorage.getItem('tgb_app')) {
    console.log(sessionStorage.getItem('tgb_app'))
    console.log(`email ${sessionStorage.getItem('user_email')}`)
    document.body.style.backgroundColor = 'red';
  }
});
