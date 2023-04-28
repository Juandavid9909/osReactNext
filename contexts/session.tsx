import useSessionContextState from "hooks/useSessionContextState";
import type { FC } from "react";
import { createContext } from "react";
import type { ProcessProps } from "types/components/pages/Process";
import type { SessionContextState } from "types/contexts/session";
import { initialSessionContextState } from "utils/initialContextStates";

const SessionContext = createContext<SessionContextState>(initialSessionContextState);

export const SessionProvider: FC<ProcessProps> = ({ children }) => (
  <SessionContext.Provider value={ useSessionContextState() }>
    { children }
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;