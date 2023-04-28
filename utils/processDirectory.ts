import dynamic from "next/dynamic";

import { Processes } from "types/contexts/process";

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import("components/apps/HelloWorld")),
    hasWindow: true
  }
}

export default processDirectory;
