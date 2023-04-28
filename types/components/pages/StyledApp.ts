import type { DefaultTheme } from "styled-components";

export type StyledAppProps = {
  theme?: DefaultTheme,
  children: string | JSX.Element | JSX.Element[]
}
