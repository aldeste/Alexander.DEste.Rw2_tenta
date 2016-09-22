import countryGenerator from 'countries';

(() => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  function toggle(string) {
    if (string === 'none') {
      return 'flex';
    }
    return 'none';
  }

  function toggleMenu() {
    nav.style.display = toggle(nav.style.display);
  }

  hamburger.addEventListener('click', toggleMenu, false);
})();

function changeCountry() {
  const el = document.querySelector('.hero__headline span');

  el.innerHTML = countryGenerator();
  setTimeout(changeCountry, 1800);
}

changeCountry();
