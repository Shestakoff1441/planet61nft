import { useEffect } from "react";
import * as THREE from "three";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import atmopsphereVertex from "./shaders/atmVertex.glsl";
import atmopsphereFragment from "./shaders/atmFragment.glsl";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import styles from "./RoundEarth.module.scss";
import GlobeLandScape from "../../assets/EarthLandScape/earth.jpg";
import RoundMars from "../RoundMars";
import Section from "../common/Section";
const RoundEarth = () => {
  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const canvas = document.querySelector("#earthCanvas");
    const parentElement = document.querySelector("#roundEarthContainer");

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(parentElement.offsetWidth / 2, innerHeight / 2);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
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
      new THREE.SphereGeometry(5, 50, 50),
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
    <Section bgc="#000">
      <div className={styles.roundEarthContainer} id="roundEarthContainer">
        <canvas
          id="earthCanvas"
          // style={{ width: "100vw", height: "100vh" }}
        ></canvas>
        <div className={styles.infoBlock}>
          <div className={styles.yearTitle}> 2161</div>
          <br></br>
          <div className={styles.paragraphText}></div>
          <div className={styles.paragraphText}>
            Many areas due to occurrence and high temperature become
            uninhabitable. In the countries of the Persian Gulf air temperature
            75 C. People still live in big circles megacities with a developed
            air conditioning system, but with a developed infrastructure free at
            night.
          </div>
          <br></br>
          <div className={styles.paragraphText}>
            Biological species of animals and plants are disappearing. Their
            habitat rapidly changing, not allowing to adapt to these changes.
            Insect migration brought to Europe, North America tropical diseases
            such as fever, malaria.
          </div>
          <br></br>
          <div className={styles.paragraphText}>
            In Central Asia, Mediterranean, South Africa, Australia due to
            reduced rainfall dominated by drought and lack of drinking water.
            Pandemics do not stop in the world.
          </div>
          <br></br>
          <div className={styles.paragraphText}>
            In Central Asia, Mediterranean, South Africa, Australia due to
            reduced rainfall dominated by drought and lack of drinking water.
            Pandemics do not stop in the world.
          </div>
        </div>
      </div>
      <RoundMars />
    </Section>
  );
};

export default RoundEarth;
