import * as THREE from './assets/js/three.module.min.js';

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = document.querySelector('#webgl');

if (canvas && !reduceMotion) {
  try {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, innerWidth/innerHeight, .1, 100);
    camera.position.set(0,0,7);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha:true,
      antialias:true,
      powerPreference:'high-performance'
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
    renderer.setSize(innerWidth,innerHeight);

    const pointsGeometry = new THREE.BufferGeometry();
    const count = innerWidth < 700 ? 360 : 700;
    const pos = new Float32Array(count*3);
    for(let i=0;i<count;i++){
      pos[i*3]=(Math.random()-.5)*16;
      pos[i*3+1]=(Math.random()-.5)*10;
      pos[i*3+2]=(Math.random()-.5)*8;
    }
    pointsGeometry.setAttribute('position',new THREE.BufferAttribute(pos,3));
    scene.add(new THREE.Points(
      pointsGeometry,
      new THREE.PointsMaterial({color:0x79cfff,size:.012,transparent:true,opacity:.45})
    ));

    addEventListener('resize',()=>{
      camera.aspect=innerWidth/innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
      renderer.setSize(innerWidth,innerHeight);
    });

    let running = !document.hidden;
    document.addEventListener('visibilitychange', () => {
      running = !document.hidden;
      if (running) requestAnimationFrame(tick);
    });

    function tick(){
      if (!running) return;
      renderer.render(scene,camera);
      requestAnimationFrame(tick);
    }
    tick();
  } catch (_) {
    canvas.style.display='none';
  }
} else if (canvas) {
  canvas.style.display='none';
}
