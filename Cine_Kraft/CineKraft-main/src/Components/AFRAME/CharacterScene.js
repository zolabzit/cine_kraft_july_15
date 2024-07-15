// import React, { useEffect } from 'react';
// import * as THREE from 'three';
// import 'aframe';
// import 'aframe-gltf-model-component';


// const CharacterScene = () => {
//     useEffect(() => {
//         // Load the character model asynchronously
//         const loader = new THREE.GLTFLoader();
//         loader.load(
//             './Character.gltf', // Updated path here
//             function (gltf) {
//                 // Once loaded, append the model to the scene
//                 const sceneEl = document.querySelector('a-scene');
//                 sceneEl.appendChild(gltf.scene);
//             },
//             undefined,
//             function (error) {
//                 console.error(error);
//             }
//         );
//     }, []);

//     return (
//         <a-scene>
//             {/* Camera and lighting setup */}
//             <a-entity camera look-controls></a-entity>
//             <a-light type="ambient" color="#FFFFFF"></a-light>
//             <a-light type="directional" position="2 4 3" intensity="0.5"></a-light>
//         </a-scene>
//     );
// };

// export default CharacterScene;
