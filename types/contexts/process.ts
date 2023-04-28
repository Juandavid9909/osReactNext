import { ComponentType } from "react";

export type Process = {
  Component: ComponentType,
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
