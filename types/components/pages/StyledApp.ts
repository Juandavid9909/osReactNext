export type Theme = {
  colors: {
    primary: string
  }
}

export type StyledAppProps = {
  theme?: Theme,
  children: string | JSX.Element | JSX.Element[]
}
