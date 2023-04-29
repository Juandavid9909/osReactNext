import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/Processes/ProcessLoader';
import { ProcessProvider } from 'contexts/process';

export default function Home(): React.ReactElement {
  return (
    <Desktop>
      {/* @ts-ignore */}
      <ProcessProvider>
          <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  );
}
