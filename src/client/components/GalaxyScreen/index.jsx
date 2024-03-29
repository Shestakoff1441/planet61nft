// import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import VertexShader from "./shaders/vertex.glsl";
import FragmentShader from "./shaders/fragment.glsl";
import { useEffect } from "react";


const SpaceThree = (props) => {
  useEffect(() => {
    // const gui = new dat.GUI();
    const canvas = document.querySelector("#canvas");
    const scene = new THREE.Scene();

    const parameters = {};
    parameters.count = 200000;
    parameters.size = 3;
    parameters.radius = 5;
    parameters.branches = 7;
    parameters.spin = 1;
    parameters.randomness = 0.5;
    parameters.randomnessPower = 3;
    parameters.insideColor = "#c3723c";
    parameters.outsideColor = "#5e2f8e";

    let geometry = null;
    let material = null;
    let points = null;

    const generateGalaxy = () => {
      if (points !== null) {
        geometry.dispose();
        material.dispose();
        scene.remove(points);
      }

      geometry = new THREE.BufferGeometry();

      const positions = new Float32Array(parameters.count * 3);
      const colors = new Float32Array(parameters.count * 3);
      const scales = new Float32Array(parameters.count * 1);
      const randomness = new Float32Array(parameters.count * 3);

      const insideColor = new THREE.Color(parameters.insideColor);
      const outsideColor = new THREE.Color(parameters.outsideColor);

      for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3;

        const radius = Math.random() * parameters.radius;

        const branchAngle =
          ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

        positions[i3] = Math.cos(branchAngle) * radius;
        positions[i3 + 1] = 0;
        positions[i3 + 2] = Math.sin(branchAngle) * radius;

        const randomX =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness *
          radius;
        const randomY =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness *
          radius;
        const randomZ =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness *
          radius;
        randomness[i3 + 0] = randomX;
        randomness[i3 + 1] = randomY;
        randomness[i3 + 2] = randomZ;

        const mixedColor = insideColor.clone();
        mixedColor.lerp(outsideColor, radius / parameters.radius);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;

        scales[i] = Math.random();
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("aScale", new THREE.BufferAttribute(colors, 1));
      geometry.setAttribute(
        "aRandomness",
        new THREE.BufferAttribute(randomness, 3)
      );

      material = new THREE.ShaderMaterial({
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        vertexShader: VertexShader,
        fragmentShader: FragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uSize: { value: 20 * renderer.getPixelRatio() }
        }
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);
    };

    // gui
    //   .add(parameters, "count")
    //   .min(100)
    //   .max(1000000)
    //   .step(100)
    //   .onFinishChange(generateGalaxy);
    // gui
    //   .add(parameters, "radius")
    //   .min(0.01)
    //   .max(20)
    //   .step(0.01)
    //   .onFinishChange(generateGalaxy);
    // gui
    //   .add(parameters, "branches")
    //   .min(2)
    //   .max(20)
    //   .step(1)
    //   .onFinishChange(generateGalaxy);
    // gui
    //   .add(parameters, "randomness")
    //   .min(0)
    //   .max(2)
    //   .step(0.001)
    //   .onFinishChange(generateGalaxy);
    // gui
    //   .add(parameters, "randomnessPower")
    //   .min(1)
    //   .max(10)
    //   .step(0.001)
    //   .onFinishChange(generateGalaxy);
    // gui.addColor(parameters, "insideColor").onFinishChange(generateGalaxy);
    // gui.addColor(parameters, "outsideColor").onFinishChange(generateGalaxy);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.01,
      1000
    );
    camera.position.x = 30;
    camera.position.y = 10;
    camera.position.z = 16;
    scene.add(camera);

    const controls = new OrbitControls(camera, canvas);
    controls.enabled = true;
    controls.autoRotate = true;
    controls.enableRotate = true;
    controls.autoRotateSpeed = 1.5;
    controls.minZoom = 3;
    controls.enableZoom = false;
    controls.maxDistance = 3;
    controls.rotateSpeed = 2;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    generateGalaxy();
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      material.uniforms.uTime.value = elapsedTime;
      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);
  return (
    <>
      {props.render()}
      <canvas id="canvas" style={{ width: "100vw", height: "100vh" }}></canvas>
    </>
  );
};

export default SpaceThree;
