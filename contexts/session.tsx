import type { FC } from "react";
import { createContext } from "react";

import type { SessionContextState } from "types/contexts/session";
import type { ProcessProps } from "types/components/pages/Process";

import useSessionContextState from "hooks/useSessionContextState";

const SessionContext = createContext<SessionContextState>({});

export const SessionProvider: FC<ProcessProps> = ({ children }) => (
  <SessionContext.Provider value={ useSessionContextState() }>
    { children }
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
