import Desktop from 'components/system/Desktop';
import Taskbar from 'components/system/Taskbar';
import ProcessLoader from 'components/system/Processes/ProcessLoader';
import { ProcessProvider } from 'contexts/process';

const Home = (): React.ReactElement => (
  <Desktop>
    {/* @ts-ignore */}
    <ProcessProvider>
        <Taskbar />

        <ProcessLoader />
    </ProcessProvider>
  </Desktop>
);


export default Home;
