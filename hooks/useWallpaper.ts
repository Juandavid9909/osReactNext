import WAVES from "libs/vanta.waves.min";
import type { RefObject } from "react";
import { useEffect } from "react";
import * as THREE from "three";

const useWallpaper = (refElement: RefObject<HTMLElement>): void => {
  useEffect(() => {
    const vantaEffect = WAVES({
      el: refElement.current,
      THREE,
      gyroControls: false,
      mouseControles: false,
      touchControls: false,
      shininess: 35,
      waveHeight: 15,
      waveSpeed: 0.25,
      zoom: 0.95
    });

    return () => {
      vantaEffect.destroy();
    }
  }, [refElement]);
}

export default useWallpaper;
