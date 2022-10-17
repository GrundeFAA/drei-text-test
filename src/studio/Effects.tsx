import { useLoader } from "@react-three/fiber";
import { EffectComposer, Bloom, LUT } from "@react-three/postprocessing";
import { useControls } from "leva";
import { LUTCubeLoader } from "postprocessing";
import { Texture } from "three";

export function Effects() {
  const texture: Texture = useLoader(LUTCubeLoader, "assets/texture.cube");
  const { enabled, ...props } = useControls({
    enabled: true,
    luminanceThreshold: { value: 0.8, min: 0, max: 1 },
    intensity: { value: 0.2, min: 0, max: 4 },
  });
  return (
    <EffectComposer>
      <Bloom mipmapBlur luminanceSmoothing={0} {...props} />
      <LUT lut={texture} />
    </EffectComposer>
  );
}
