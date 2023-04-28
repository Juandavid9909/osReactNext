import type { FC } from "react";
import { createContext } from "react";

import type { ProcessContextState } from "types/contexts/process";
import type { ProcessProps } from "types/components/pages/Process";

import processDirectory from "utils/processDirectory";

import useProcessContextState from "hooks/useProcessContextState";

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

export const ProcessProvider: FC<ProcessProps> = ({ children }) => (
  <ProcessContext.Provider value={ useProcessContextState(processDirectory) }>
    { children }
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
