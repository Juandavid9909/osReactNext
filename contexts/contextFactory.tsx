import { createContext } from "react";
import { ContextFactory } from "types/contexts/contextFactory";

const contextFactory: ContextFactory = (initialContextState, useContextState) => {
  const { Consumer, Provider } = createContext(initialContextState);

  const ProcessProvider: React.FC<any> = ({ children }) => (
    <Provider value={ useContextState() }>
      { children }
    </Provider>
  );

  return { Consumer, Provider: ProcessProvider };
}

export default contextFactory;
