import vantaWaves from "utils/vantaWaves";
import type { DefaultTheme } from "styled-components";

const colors = {
  background: "#000",
  clockText: "rgba(255, 255, 255, 0.8)",
  primary: "#000000",
  startButton: "#FFF",
  taskbar: "rgba(0, 0, 0, 0.6)",
  window: "#808080"
};

const sizes = {
  clock: {
    fontSize: "12px",
    width: "76px"
  },
  startButton: {
    size: "19px",
    width: "36px"
  },
  taskbar: {
    blur: "5px",
    entry: {
      maxWidth: "161px"
    },
    height: "30px"
  }
};

const wallpaper = vantaWaves({
  color: 0x274c,
  shininess: 35,
  waveHeight: 15,
  waveSpeed: 0.3,
  zoom: 0.9
});

const defaultTheme: DefaultTheme = { colors, sizes, wallpaper };

export default defaultTheme;
