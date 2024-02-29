import {
  MeshReflectorMaterial,
  Reflector,
  useTexture,
} from "@react-three/drei";

const Ground = () => {
  const [floor, normal] = useTexture([
    " /models/SurfaceImperfections003_1K_var1.jpg",
    "/models/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <Reflector
      position={[0, -1.2, 0]}
      blur={[500, 500]}
      resolution={512}
      args={[70, 70]}
      mirror={0.5}
      mixBlur={6}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    >
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
};

export default Ground;
