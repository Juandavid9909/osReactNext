import colorCycle from "components/system/Desktop/wallpapers/colorCycle";
import * as THREE from "three";
import type { WallpaperEffect } from "styles/styled";
import WAVES from 'vanta/dist/vanta.waves.min';

type VantaWavesSettings = {
  color: number,
  shininess: number,
  waveHeight: number,
  waveSpeed: number,
  zoom: number
}

const disableControls = {
  mouseControls: false,
  touchControls: false
}

const isWebGLAvailable = typeof WebGLRenderingContext !== "undefined";

const vantaWaves = (settings: VantaWavesSettings): WallpaperEffect => (element) => {
  const vantaEffect = element && isWebGLAvailable ? WAVES({
    el: element,
    THREE,
    ...disableControls,
    ...settings
  }) : undefined;

  if(vantaEffect) {
    const { stop: stopColorCycle } = colorCycle(settings.color, (color) => vantaEffect.setOptions({ color }));

    vantaEffect.onDestroy = stopColorCycle;
  }

  return () => vantaEffect?.destroy?.();
}

export default vantaWaves;
