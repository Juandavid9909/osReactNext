import Desktop from 'components/system/Desktop';
import FileManager from 'components/system/Files/FileManager';
import Taskbar from 'components/system/Taskbar';
import ProcessLoader from 'components/system/Processes/ProcessLoader';
import { ProcessProvider } from 'contexts/process';

const Home = (): React.ReactElement => (
  <Desktop>
    {/* @ts-ignore */}
    <ProcessProvider>
        <FileManager directory="/desktop" />

        <Taskbar />

        <ProcessLoader />
    </ProcessProvider>
  </Desktop>
);


export default Home;
