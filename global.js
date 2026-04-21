console.log("IT'S ALIVE!");

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}


// let navLinks = $$("nav a");

// let currentLink = navLinks.find( (a) =>
    // a.host === location.host && a.pathname === location.pathname);
// currentLink?.classList.add('current');

let pages = [
  {url: '', title: 'Home'},
  {url: 'projects/', title: 'Projects'},
  {url: 'profile/', title: 'Profile'},
  {url: 'contact/', title: 'Contact'},
];

let nav = document.createElement('nav');
document.body.prepend(nav);

const BASE_PATH = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
  ? "/"                  // Local server
  : "/portfolio/";         // GitHub Pages repo name


for (let p of pages){
  let url = p.url;
  let title = p.title;
  if (!url.startsWith('http')) {
    url = BASE_PATH + url;
  }
  let a = document.createElement('a');
  a.href = url;
  a.textContent = title;
  nav.append(a);
  if (a.host === location.host && a.pathname.replace(/\/$/, '') === location.pathname.replace(/\/$/, '')) {
    a.classList.add('current');
  }
}