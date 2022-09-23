// import { useEffect } from "react";
// import * as THREE from "three";
// import vertexShader from "./shaders/vertex.glsl";
// import fragmentShader from "./shaders/fragment.glsl";
// import atmopsphereVertex from "./shaders/atmVertex.glsl";
// import atmopsphereFragment from "./shaders/atmFragment.glsl";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import styles from "./RoundPlanets.module.scss";
// import GlobeLandScape from "../../assets/EarthLandScape/earth.jpg";
import staticEarth from "../../assets/images/earthStatic.svg";
import RoundMars from "../RoundMars";

const RoundPlanets = () => {
  // useEffect(() => {
  //   const sizes = {
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   };
  //   const canvas = document.querySelector("#earthCanvas");

  //   const scene = new THREE.Scene();

  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     sizes.width / sizes.height,
  //     0.1,
  //     1000
  //   );

  //   const renderer = new THREE.WebGLRenderer({
  //     canvas,
  //     // antialias: true,
  //     alpha: true
  //   });
  //   // renderer.setPixelRatio(window.devicePixelRatio);
  //   renderer.setSize(520, 440);

  //   const sphere = new THREE.Mesh(
  //     new THREE.SphereGeometry(5, 50, 50),
  //     new THREE.ShaderMaterial({
  //       vertexShader,
  //       fragmentShader,
  //       uniforms: {
  //         globeTexture: {
  //           value: new THREE.TextureLoader().load(GlobeLandScape.src)
  //         }
  //       }
  //     })
  //   );

  //   const atmosphere = new THREE.Mesh(
  //     new THREE.SphereGeometry(5, 50, 50),
  //     new THREE.ShaderMaterial({
  //       vertexShader: atmopsphereVertex,
  //       fragmentShader: atmopsphereFragment,
  //       blending: THREE.AdditiveBlending,
  //       side: THREE.BackSide
  //     })
  //   );

  //   window.addEventListener("resize", () => {
  //     renderer.setSize(520, 440);
  //   });
  //   atmosphere.scale.set(1.1, 1.1, 1.1);
  //   scene.add(sphere);
  //   scene.add(atmosphere);
  //   camera.position.z = 10;
  //   const controls = new OrbitControls(camera, canvas);
  //   controls.enabled = true;
  //   controls.enableZoom = false;

  //   const animate = () => {
  //     requestAnimationFrame(animate);
  //     controls.update();
  //     renderer.render(scene, camera);
  //     sphere.rotation.y += 0.004;
  //   };
  //   animate();
  // }, []);
  return (
    <div className={styles.roundPlanetsContainer}>
      <div className={styles.roundEarthContainer} id="roundEarthContainer">
        {/* <canvas
          id="earthCanvas"
        ></canvas> */}
        <div className={styles.desktopPlanetBlock}>
          <img src={staticEarth.src} alt="" />
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.yearTitle}> 2161</div>
          <br></br>
          <div className={styles.paragraphText}>
            The consequences of climate change have become irreversible.
            Climatic zones are increasing, the maximum frequency and strength of
            abnormal natural resources such as droughts and floods.
          </div>
          <br></br>
          {/* <div className={styles.paragraphText}>
            Many areas due to occurrence of high temperature become
            uninhabitable. In the countries of the Persian Gulf air temperature
            is 75 C. People still live in big domed megacitie with a developed
            air conditioning system, but with a advanced infrastructure free at
            night.
          </div>
          <br></br> */}
          <div className={styles.paragraphText}>
            Biological species of animals and plants are disappearing. Their
            habitat is rapidly changing, not allowing to adapt to these changes.
            Insect migration brought to Europe, North America tropical diseases
            such as fever, malaria.
          </div>
          <br></br>
          <div className={styles.paragraphText}>
            Such regions as Central Asia, Mediterranean, South Africa, Australia
            suffer from drought and lack of drinking water due to reduced
            rainfal. Pandemics do not stop in the world.
          </div>
          {/* <br></br>
          <div className={styles.paragraphText}>
            Due to the rise in the level of the World Ocean, coastal territories
            of the continents and small islands go under water. A significant
            area of ​​Europe, Japan, Indonesia is flooded, which will exacerbate
            mass migration.
          </div> */}
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
          and sustainable, but over time, humanity has been changed.
        </div>
        {/* <br />
        <div className={styles.finalMarsSectionConclusion}>
          In the process of evolution, the human species has undergone
          significant changes, thus giving rise to a new race called Andromeda.
        </div> */}
      </div>
    </div>
  );
};

export default RoundPlanets;
