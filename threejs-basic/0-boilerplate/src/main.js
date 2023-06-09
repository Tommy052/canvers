import * as THREE from 'three'

window.addEventListener('load',function() {
  init();
})

function init() {
  const renderer = new THREE.WebGL1Renderer({
    // alpha:true
    antialias: true
  });

  renderer.setSize(window.innerWidth,innerHeight)
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    500
  )
  const geometry = new THREE.BoxGeometry(2,2,2);
  const material = new THREE.MeshStandardMaterial({color: 0xcc99ff})

  const cube = new THREE.Mesh(geometry,material)

  scene.add(cube)
  // camera.position.z = 5;
  camera.position.set(3,4,5);
  camera.lookAt(cube.position);

  const directionalLight = new THREE.DirectionalLight(0xf0f0f0,1);
  directionalLight.position.set(-1,2,3);
  scene.add(directionalLight)

  const ambientLight = new THREE.AmbientLight(0xf0f0f0,0.1)
  ambientLight.position.set(-1,2,3);
  scene.add(ambientLight)

  renderer.render(scene,camera);
}