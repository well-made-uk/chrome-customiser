window.addEventListener('load', (event) => {
  const cinema = document.querySelectorAll('[title="Cinema mode (t)"]')[0];
  const autoplay = document.querySelectorAll('[title="Auto-play is on"]')[0];

  if (cinema) {
    setTimeout(() => {cinema.click()},1200)
  }

  if (autoplay) {
    setTimeout(() => {autoplay.click()},1200)
  }

})
