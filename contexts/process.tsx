import type { FC } from "react";
import { createContext, useState } from "react";

import type { ProcessContextState } from "types/contexts/process";
import type { ProcessProps } from "types/components/pages/Process";

import processDirectory from "utils/processDirectory";

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

export const ProcessProvider: FC<ProcessProps> = ({ children }) => {
  const [processes] = useState(processDirectory);

  return (
    <ProcessContext.Provider value={{ processes }}>
      {/* {  Object.entries(processes).map(([id, { Component }]) => <Component key={ id } />) } */}
      { children }
    </ProcessContext.Provider>
  );
};

export const ProcessConsumer = ProcessContext.Consumer;
