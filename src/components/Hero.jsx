import { Canvas } from "@react-three/fiber";
import { Motorcycle } from "./Motorcycle";
import {
  Environment,
  OrbitControls,
  Lightformer,
  ContactShadows,
  Text,
  RenderTexture,
  useVideoTexture,
  CurveModifier,
} from "@react-three/drei";
import { Effects } from "./Effects";
import Ground from "./Ground";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";

function Hero(props) {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "modules/ktm.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);

  return (
    <>
      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 15], fov: 25 }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={["#171720", 10, 30]} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
          <color attach="background" args={["#15151a"]} />
          <hemisphereLight intensity={0.5} />
          <ContactShadows
            resolution={1024}
            frames={1}
            position={[0, -1.16, 0]}
            scale={15}
            blur={0.5}
            opacity={1}
            far={20}
          />
          <mesh
            scale={4}
            position={[3, -1.161, -1.5]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
          >
            <ringGeometry args={[0.9, 1, 4, 1]} />
            <meshStandardMaterial color="white" roughness={0.75} />
          </mesh>
          <mesh
            scale={4}
            position={[-3, -1.161, -1]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
          >
            <ringGeometry args={[0.9, 1, 3, 1]} />
            <meshStandardMaterial color="white" roughness={0.75} />
          </mesh>
          <ambientLight intensity={1.2} />
          {/* <pointLight position={[0, -1, 0]} decay={10} distance={50} /> */}
          <Environment resolution={512}>
            {/* Ceiling */}
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, -9]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, -6]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, -3]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, 0]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, 3]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, 6]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, 9]}
              scale={[10, 1, 1]}
            />
            {/* Sides */}
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-50, 2, 0]}
              scale={[100, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={-Math.PI / 2}
              position={[50, 2, 0]}
              scale={[100, 2, 1]}
            />
            {/* Key */}
            <Lightformer
              form="ring"
              color="red"
              intensity={10}
              scale={2}
              position={[10, 5, 10]}
              onUpdate={(self) => self.lookAt(0, 0, 0)}
            />
          </Environment>
          <Motorcycle rotation={[0, Math.PI / -2.9, 0]} scale={0.015} />
          <Effects />
          {/* <Text
            font="models/Inter-Bold.woff"
            fontSize={3}
            letterSpacing={-0.06}
            position={[0, 1, -6]}
            {...props}
          >
            KTM 450 EXC
            <meshBasicMaterial toneMapped={false}>
              <videoTexture
                attach="map"
                args={[video]}
                encoding={THREE.sRGBEncoding}
              />
              <RenderTexture attach={"map"} args={[video]}>
                <color attach="background" args={["#fff"]} />
                <Environment preset="sunset" />
              </RenderTexture>
            </meshBasicMaterial>
          </Text> */}
          <VideoText />
          <Ground />
        </Suspense>
      </Canvas>
    </>
  );
}

function VideoText(props) {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "models/ktm.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <Text
      font="models/Inter-Bold.woff"
      fontSize={3}
      letterSpacing={-0.02}
      position={[0, 1, -6]}
      {...props}
    >
      KTM450EXC
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </Text>
  );
}

export default Hero;
