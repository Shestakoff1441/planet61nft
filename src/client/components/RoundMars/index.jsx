import { useEffect } from "react";
import * as THREE from "three";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import atmopsphereVertex from "./shaders/atmVertex.glsl";
import atmopsphereFragment from "./shaders/atmFragment.glsl";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import styles from "./RoundEarth.module.scss";
import GlobeLandScape from "../../assets/EarthLandScape/mars2.jpeg";

import Section from "../common/Section";
const RoundEarth = () => {
  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const canvas = document.querySelector("#marsCanvas");
    const parentElement = document.querySelector("#roundEarthContainer");

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    console.log(parentElement.offsetWidth);
    console.log(canvas);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(parentElement.offsetWidth / 2, innerHeight / 2);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(4.5, 30, 30),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(GlobeLandScape.src)
          }
        }
      })
    );

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(4.5, 30, 30),
      new THREE.ShaderMaterial({
        vertexShader: atmopsphereVertex,
        fragmentShader: atmopsphereFragment,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      })
    );

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(parentElement.offsetWidth / 2, innerHeight / 2);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
    atmosphere.scale.set(1.1, 1.1, 1.1);
    scene.add(sphere);
    scene.add(atmosphere);
    camera.position.z = 10;
    const controls = new OrbitControls(camera, canvas);
    controls.enabled = true;
    // controls.autoRotateSpeed = 0.5;
    // controls.minZoom = 30;
    controls.enableZoom = false;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      sphere.rotation.y += 0.004;
    };
    animate();
  }, []);
  return (
    <div className={styles.roundEarthContainer} id="roundEarthContainer">
      <canvas
        id="marsCanvas"
        // style={{ width: "100vw", height: "100vh" }}
      ></canvas>
      <div className={styles.infoBlock}>
        <div className={styles.yearTitle}> 2261</div>
        <br></br>
        <div className={styles.paragraphText}>
          Life on Earth is becoming unbearable. Enormous efforts are directed
          towards space exploration in an attempt to find a new home for
          humanity.
        </div>
        <br></br>
        <div className={styles.paragraphText}>
          Mars is still the most colonizable planet in the solar system. And man
          successfully builds the first settlements.
        </div>
        <br></br>
        <div className={styles.paragraphText}>
          The planned operation to “warm up” Mars by atomic bombing was not
          successful, and man has to adapt to life on a cold planet, where the
          average temperature is -80 C. In addition to the cold, dry
          environment, lack of air and giant sandstorms, man will have to face
          high levels of solar radiation, which is extremely dangerous due to
          the lack of an ozone layer on Mars.
        </div>
        <br></br>
        <div className={styles.paragraphText}>
          In Central Asia, Mediterranean, South Africa, Australia due to reduced
          rainfall dominated by drought and lack of drinking water. Pandemics do
          not stop in the world.
        </div>
      </div>
    </div>
  );
};

export default RoundEarth;
