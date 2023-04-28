import type { DefaultTheme } from "styled-components";

export type StyledAppProps = {
  currentTheme: DefaultTheme,
  children: string | JSX.Element | JSX.Element[]
}
