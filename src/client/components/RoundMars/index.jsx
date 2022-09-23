// import { useEffect } from "react";
// import * as THREE from "three";
// import vertexShader from "./shaders/vertex.glsl";
// import fragmentShader from "./shaders/fragment.glsl";
// import atmopsphereVertex from "./shaders/atmVertex.glsl";
// import atmopsphereFragment from "./shaders/atmFragment.glsl";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// import GlobeLandScape from "../../assets/EarthLandScape/mars2.jpeg";
import marsStatic from "../../assets/images/marsStatic.svg";
import classnames from "classnames";
import styles from "../RoundPlanets/RoundPlanets.module.scss";

const RoundMars = () => {
  // useEffect(() => {
  //   const sizes = {
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   };
  //   const canvas = document.querySelector("#marsCanvas");

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
  //   renderer.setSize(520, 440);

  //   const sphere = new THREE.Mesh(
  //     new THREE.SphereGeometry(4.5, 30, 30),
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
  //     new THREE.SphereGeometry(4.5, 30, 30),
  //     new THREE.ShaderMaterial({
  //       vertexShader: atmopsphereVertex,
  //       fragmentShader: atmopsphereFragment,
  //       blending: THREE.AdditiveBlending,
  //       side: THREE.BackSide
  //     })
  //   );

  //   window.addEventListener("resize", () => {
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(520, 440);
  //   });
  //   atmosphere.scale.set(1, 1, 1);
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
    <div
      className={classnames(styles.roundEarthContainer, styles.marsBlock)}
      id="roundEarthContainer"
    >
      {/* <canvas
        id="marsCanvas"
      ></canvas> */}
      <div className={styles.desktopPlanetBlock}>
        <img src={marsStatic.src} alt="" />
      </div>
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
          Mars is still the most colonizable planet in the Solar System. And man
          successfully builds the first settlements.
        </div>
        <div className={styles.paragraphText}>
          {/* The planned operation to “warm up” Mars by atomic bombing was not
          successful, and man has to adapt to life on a cold planet, where the
          average temperature is -80 C.  */}
          In addition to the cold, dry environment, lack of air and giant
          sandstorms, man will have to face high levels of solar radiation,
          which is extremely dangerous due to the lack of the ozone layer on
          Mars.
        </div>
        <br></br>
      </div>
      <div className={styles.mobileStaticPlanet}>
        <img src={marsStatic.src} alt="" />
      </div>
    </div>
  );
};

export default RoundMars;
