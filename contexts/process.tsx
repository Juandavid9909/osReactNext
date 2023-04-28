import useProcessContextState from "hooks/useProcessContextState";
import type { FC } from "react";
import { createContext } from "react";
import type { ProcessProps } from "types/components/pages/Process";
import type { ProcessContextState } from "types/contexts/process";
import { initialProcessContextState } from "utils/initialContextStates";
import processDirectory from "utils/processDirectory";

const ProcessContext = createContext<ProcessContextState>(initialProcessContextState);

export const ProcessProvider: FC<ProcessProps> = ({ children }) => (
  <ProcessContext.Provider value={ useProcessContextState(processDirectory) }>
    { children }
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
