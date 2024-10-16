import React, { useEffect } from "react";
import "aframe";
import "ar.js";

function App() {
  useEffect(() => {
    // Add event listeners or AR initialization if needed
  }, []);

  return (
    <div>
      <a-scene
        embedded
        arjs="sourceType: webcam;"
        renderer="logarithmicDepthBuffer: true;"
      >
        {/* This is your target image */}
        <a-marker type="pattern" url="patt.patt">
          {/* Replace this with your 3D model */}
          <a-entity
            gltf-model="url(/model.glb)"
            scale="0.5 0.5 0.5"
            position="0 0.5 0"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 4000"
          ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
