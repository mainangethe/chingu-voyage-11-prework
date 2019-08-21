const mainNavLinks = document.querySelectorAll('.navigation_link_js');
const mainSections = document.querySelectorAll('main section');

// let lastId;
// let cur = [];

window.addEventListener('scroll', debounce(highlightCurrentSection));
window.addEventListener('scroll', debounce(hideOrShowScrollHelper));



function highlightCurrentSection () {
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

let scrollPos = 100;
const scrollHelper = document.querySelector('.scroll-helper');

function hideOrShowScrollHelper() {
  let windowY = window.scrollY;

  if(windowY < scrollPos) {
    scrollHelper.classList.add('disappear_js');
  } else {
    scrollHelper.classList.remove('disappear_js');
  }
}


function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context,args);
  };
};