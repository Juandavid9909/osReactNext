import "styled-components";

export type WallpaperEffect = (element: HTMLElement | null) => () => void;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string,
      highlight: string,
      startButton: string,
      taskbar: string,
      taskbarHover: string,
      text: string,
      titlebar: {
        background: string,
        backgroundHover: string,
        closeHover: string,
        text: string
      },
      window: string
    },
    formats: {
      date: Intl.DateTimeFormatOptions
      time: Intl.DateTimeFormatOptions
    },
    sizes: {
      clock: {
        fontSize: string,
        width: string
      },
      startButton: {
        size: string,
        width: string
      },
      taskbar: {
        blur: string,
        entry: {
          borderSize: string,
          fontSize: string,
          icon: {
            margin: string,
            size: string
          },
          maxWidth: string
        },
        height: string
      },
      titlebar: {
        buttonIconWidth: string,
        buttonWidth: string,
        fontSize: string,
        height: string,
        iconMargin: string,
        iconSize: string
      }
    }
    wallpaper?: WallpaperEffect
  }
}
