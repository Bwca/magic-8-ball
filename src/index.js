import * as THREE from 'three';
import { AmbientLight } from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 2000);

//const geometry = new THREE.BoxGeometry(85, 85, 85);
const geometry = new THREE.SphereGeometry(85, 85, 85);
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, -500);
scene.add(cube);

const light = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(light);
const light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

const animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.z += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
