import { useState } from "react";
import type { ProcessContextState } from "types/contexts/process";
import { getStartupProcesses } from "utils/processDirectory";

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState(getStartupProcesses());

  return { processes };
}

export default useProcessContextState;
