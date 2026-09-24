const { gsap, ScrollTrigger } = window;

const $ = (s, scope=document) => scope.querySelector(s);
const $$ = (s, scope=document) => [...scope.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

$('#year').textContent = new Date().getFullYear();

/* Theme */
const themeToggle = $('#themeToggle');
const themeMeta = $('meta[name="theme-color"]');
let savedTheme = null;
try { savedTheme = localStorage.getItem('nazmul-theme'); } catch (_) {}
if (savedTheme === 'light') document.body.classList.add('light');

function syncThemeUI(){
  const light = document.body.classList.contains('light');
  themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
  themeToggle.title = light ? 'Switch to dark theme' : 'Switch to light theme';
  themeMeta.content = light ? '#edf5fb' : '#030814';
}
syncThemeUI();

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.add('theme-changing');
  document.body.classList.toggle('light');
  try { localStorage.setItem('nazmul-theme', document.body.classList.contains('light') ? 'light' : 'dark'); } catch (_) {}
  syncThemeUI();
  clearTimeout(themeToggle._timer);
  themeToggle._timer = setTimeout(() => document.documentElement.classList.remove('theme-changing'), 700);
});

/* Navigation */
const navLinks = $$('.site-nav [data-scroll-target]');
const sections = ['home','portfolio','fiverr','about','contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const sectionLinkMap = new Map(navLinks.map(link => [link.dataset.scrollTarget, link]));

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.dataset.scrollTarget;
    const section = document.getElementById(targetId);
    if (!section) return;

    if (targetId === 'home') {
      scrollTo({top:0, behavior:reduceMotion ? 'auto' : 'smooth'});
    } else {
      section.scrollIntoView({
        behavior:reduceMotion ? 'auto' : 'smooth',
        block:'start'
      });
    }
  });
});

function updateActiveNav(){
  const doc = document.documentElement;
  const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= doc.scrollHeight - 8;
  let activeId = 'home';

  if (atBottom) {
    activeId = 'contact';
  } else {
    const headerH = $('.site-header')?.offsetHeight || 72;
    const marker = window.scrollY + headerH + Math.min(window.innerHeight * .28, 220);
    for (const section of sections) {
      if (section.offsetTop <= marker) activeId = section.id;
    }
  }

  navLinks.forEach(link => {
    const active = link === sectionLinkMap.get(activeId);
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

addEventListener('scroll', updateActiveNav, {passive:true});
addEventListener('resize', updateActiveNav);
updateActiveNav();

/* Scroll progress */
const progress = $('#progress');
function onScroll(){
  const max = document.documentElement.scrollHeight - innerHeight;
  const ratio = max > 0 ? scrollY / max : 0;
  progress.style.width = `${ratio * 100}%`;
}
addEventListener('scroll', onScroll, {passive:true});
addEventListener('resize', onScroll);
onScroll();

/* Reveal */
if (gsap && ScrollTrigger && !reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);
  $$('.section-heading,.project-card,.gig-card,.about-grid,.contact-inner').forEach(el => {
    gsap.from(el, {opacity:0, y:28, duration:.8, ease:'power3.out', scrollTrigger:{trigger:el,start:'top 88%',once:true}});
  });
}
