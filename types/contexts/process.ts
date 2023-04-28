export type Process = {
  Component: React.ComponentType,
  hasWindow: boolean
}

export type Processes = {
  [id: string]: Process
}

export type ProcessContextState = {
  processes: Processes
}

export type ProcessProviderProps = {
  children: string | JSX.Element | JSX.Element[],
  startupProcesses: Processes
}
