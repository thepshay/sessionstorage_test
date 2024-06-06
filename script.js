window.addEventListener('load', () => {
  if (sessionStorage.getItem('tgb_app')) {
    const targetElement = document.body;

    const newDiv = document.createElement("div");
    newDiv.textContent = `email: ${sessionStorage.getItem('user_email')}`
    targetElement.appendChild(newDiv)
  }


});
