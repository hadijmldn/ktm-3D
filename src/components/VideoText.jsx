import React, { useEffect, useState } from "react";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const VideoText = (props) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/models/ktm.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
      KTM 450 EXC
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </Text>
  );
};

export default VideoText;
