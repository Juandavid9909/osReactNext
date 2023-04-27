import dynamic from "next/dynamic";

import { Processes } from "types/utils/processDirectory";

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import("components/apps/HelloWorld"))
  }
}

export default processDirectory;
