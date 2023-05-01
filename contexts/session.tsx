import useSessionContextState from "hooks/useSessionContextState";
import type { SessionContextState } from "types/contexts/session";
import contextFactory from "utils/contextFactory";
import { initialSessionContextState } from "utils/initialContextStates";

const { Consumer, Provider, useContext } = contextFactory<SessionContextState>(initialSessionContextState, useSessionContextState);

export {
  Consumer as SessionConsumer,
  Provider as SessionProvider,
  useContext as useSession
}
