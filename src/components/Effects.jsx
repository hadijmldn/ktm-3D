import { useLoader } from "@react-three/fiber";
import { EffectComposer, Bloom, LUT } from "@react-three/postprocessing";
import { LUTCubeLoader } from "postprocessing";

export function Effects() {
  const texture = useLoader(LUTCubeLoader, "./models/F-6800-STD.cube");

  return (
    <EffectComposer disableNormalPass>
      <Bloom
        luminanceThreshold={0.1}
        mipmapBlur
        luminanceSmoothing={0}
        intensity={1.5}
      />
      <LUT lut={texture} />
    </EffectComposer>
  );
}
