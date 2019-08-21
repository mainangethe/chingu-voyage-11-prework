const mainNavLinks = document.querySelectorAll('.navigation_link_js');
const mainSections = document.querySelectorAll('main section');

// let lastId;
// let cur = [];

window.addEventListener('scroll', activeSectionSelector);

function activeSectionSelector (event) {
  let fromTop = window.scrollY;
  
  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    
    if ( 
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active_js');
    } else {
      link.classList.remove('active_js');
    }
  });
}