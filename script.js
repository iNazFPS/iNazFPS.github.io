
const $ = (s, scope=document) => scope.querySelector(s);
const $$ = (s, scope=document) => [...scope.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

$('#year').textContent = new Date().getFullYear();

/* Loader */
const loader = $('#loader');
const bar = $('#bar');
const loadText = $('#loadText');
const start = $('#start');
let pct = 0;
const loading = setInterval(() => {
  pct = Math.min(100, pct + Math.ceil(Math.random() * 13));
  bar.style.width = `${pct}%`;
  loadText.textContent = `Building automation world… ${pct}%`;
  if (pct >= 100) {
    clearInterval(loading);
    loadText.textContent = 'System ready.';
    start.disabled = false;
  }
}, 85);

start.addEventListener('click', () => {
  document.body.classList.remove('is-loading');
  loader.classList.add('is-hidden');
  if (window.gsap && !reduceMotion) {
    gsap.from('.hero-copy > *', {opacity:0, y:24, stagger:.1, duration:.8, ease:'power3.out'});
    gsap.from('.hero-photo', {opacity:0, y:18, duration:.9, ease:'power3.out'});
  }
});

/* Theme */
const themeToggle = $('#themeToggle');
const themeMeta = $('meta[name="theme-color"]');
const savedTheme = localStorage.getItem('nazmul-theme');
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
  localStorage.setItem('nazmul-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  syncThemeUI();
  clearTimeout(themeToggle._timer);
  themeToggle._timer = setTimeout(() => document.documentElement.classList.remove('theme-changing'), 700);
});

/* Navigation */
$('[data-nav="home"]').addEventListener('click', e => {
  e.preventDefault();
  scrollTo({top:0, behavior:reduceMotion ? 'auto' : 'smooth'});
});

const navLinks = $$('.site-nav a');
const sections = ['top','systems','gigs','about','contact'].map(id => document.getElementById(id));
const sectionLinkMap = new Map(
  navLinks.map(link => [link.getAttribute('href').slice(1), link])
);

function updateActiveNav(){
  const doc = document.documentElement;
  const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= doc.scrollHeight - 8;

  let activeId = 'top';

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
if (window.gsap && !reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);
  $$('.section-heading,.project-card,.gig-card,.about-grid,.contact-inner').forEach(el => {
    gsap.from(el, {opacity:0, y:28, duration:.8, ease:'power3.out', scrollTrigger:{trigger:el,start:'top 88%',once:true}});
  });
}

/* Ambient Three.js object */
if (window.THREE && !reduceMotion) {
  const canvas = $('#webgl');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, innerWidth/innerHeight, .1, 100);
  camera.position.set(0,0,7);
  const renderer = new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
  renderer.setSize(innerWidth,innerHeight);

  const group = new THREE.Group();
  scene.add(group);
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.4,3),
    new THREE.MeshBasicMaterial({color:0x1688ff,wireframe:true,transparent:true,opacity:.26})
  );
  group.add(core);
  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(2.05,.012,8,160),
    new THREE.MeshBasicMaterial({color:0x63d2ff,transparent:true,opacity:.48})
  );
  halo.rotation.x = 1.15;
  group.add(halo);
  const halo2 = halo.clone();
  halo2.scale.set(.78,.78,.78);
  halo2.rotation.set(.4,.2,1.1);
  group.add(halo2);

  const pointsGeometry = new THREE.BufferGeometry();
  const count = innerWidth < 700 ? 360 : 700;
  const pos = new Float32Array(count*3);
  for(let i=0;i<count;i++){
    pos[i*3]=(Math.random()-.5)*16;
    pos[i*3+1]=(Math.random()-.5)*10;
    pos[i*3+2]=(Math.random()-.5)*8;
  }
  pointsGeometry.setAttribute('position',new THREE.BufferAttribute(pos,3));
  scene.add(new THREE.Points(pointsGeometry,new THREE.PointsMaterial({color:0x79cfff,size:.012,transparent:true,opacity:.45})));

  let tx=.9,ty=0,mx=0,my=0;
  addEventListener('pointermove',e=>{
    mx=(e.clientX/innerWidth-.5)*.55;
    my=(e.clientY/innerHeight-.5)*.32;
  },{passive:true});
  addEventListener('scroll',()=>{
    ty=-scrollY*.0004;
    tx=.9+Math.sin(scrollY*.001)*.3;
  },{passive:true});
  addEventListener('resize',()=>{
    camera.aspect=innerWidth/innerHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
    renderer.setSize(innerWidth,innerHeight);
  });

  function tick(){
    group.rotation.y += .0022;
    group.rotation.x += (my-group.rotation.x)*.025;
    group.position.x += (tx+mx-group.position.x)*.025;
    group.position.y += (ty-group.position.y)*.025;
    const light=document.body.classList.contains('light');
    core.material.color.setHex(light?0x0876df:0x1688ff);
    core.material.opacity=light?.16:.26;
    halo.material.opacity=light?.3:.48;
    halo2.material.opacity=light?.24:.38;
    halo.rotation.z+=.0018;
    halo2.rotation.y-=.0018;
    renderer.render(scene,camera);
    requestAnimationFrame(tick);
  }
  tick();
} else if (reduceMotion) {
  $('#webgl').style.display='none';
}
