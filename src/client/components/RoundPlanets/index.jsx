import { useEffect } from "react";
import * as THREE from "three";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import atmopsphereVertex from "./shaders/atmVertex.glsl";
import atmopsphereFragment from "./shaders/atmFragment.glsl";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import styles from "./RoundPlanets.module.scss";
import GlobeLandScape from "../../assets/EarthLandScape/earth.jpg";
import staticEarth from "../../assets/images/earthStatic.svg";
import RoundMars from "../RoundMars";

const RoundPlanets = () => {
  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const canvas = document.querySelector("#earthCanvas");
    // const parentElement = document.querySelector("#roundEarthContainer");

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas,
      // antialias: true,
      alpha: true
    });
    // renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(520, 440);

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
      // sizes.width = window.innerWidth;
      // sizes.height = window.innerHeight;

      // Update camera
      // camera.aspect = sizes.width / sizes.height;
      // camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(520, 440);
      // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
    <div className={styles.roundPlanetsContainer}>
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
      <div className={styles.mobileStaticPlanet}>
        <img src={staticEarth.src} alt="" />
      </div>

      <RoundMars />

      <div className={styles.finalMarsSection}>
        <div className={styles.finalMarsSectionTitle}>
          8000 years after colonization
        </div>
        <br />
        <div className={styles.finalMarsSectionDescription}>
          So, the mission of terraforming Mars remains unfulfilled until now.
          Man failed to change the Red Planet, making colonization comfortable
          and sustainable, but over time, man himself has changed.
        </div>
        <br />
        <div className={styles.finalMarsSectionConclusion}>
          In the process of evolution, the human species has undergone
          significant changes, thus giving rise to a new race called Andromeda.
        </div>
      </div>
    </div>
  );
};

export default RoundPlanets;
