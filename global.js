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
  a.classList.toggle(
  'current',
  a.host === location.host && (
    a.pathname === location.pathname ||
    location.pathname.endsWith(a.pathname.replace(/\/$/, '') + '/index.html') ||
    (a.pathname === '/' && location.pathname.endsWith('/index.html') && location.pathname.split('/').length === 2)
  )
);

}
document.body.insertAdjacentHTML(
  'afterbegin',
  `<label class="color-scheme">
    Theme:
    <select>
      <option color-schem="light dark">Automatic</option>
      <option color-scheme="light">Light</option>
      <option color-scheme="dark">Dark</option>
    </select>
  </label>`,
);



let color_select = document.querySelector('.color-scheme select');

if (localStorage.colorScheme) {
  document.documentElement.style.setProperty('color-scheme', localStorage.colorScheme);
  color_select.value = localStorage.colorScheme;
}


color_select.addEventListener('input', function(event) {
  console.log('color scheme changed to', event.target.value);
  let chosenScheme = this.value;
  document.documentElement.style.setProperty('color-scheme', chosenScheme);
  localStorage.colorScheme = chosenScheme;
});

export async function fetchJSON(url) {
  try {
    // Fetch the JSON file from the given URL
    const response = await fetch(url);
  } catch (error) {
    console.error('Error fetching or parsing JSON data:', error);
  }
}