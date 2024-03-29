import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import RndWindow from 'components/system/Window/RndWindow';
import StyledWindow from 'components/system/Window/StyledWindow';
import Titlebar from 'components/system/Window/Titlebar';
import useFocusable from 'components/system/Window/useFocusable';
import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import { useMemo, useRef } from 'react';

type WindowProps = ProcessComponentProps & {
  children: React.ReactNode;
};

const Window = ({ children, id }: WindowProps): JSX.Element => {
  const {
    processes: {
      [id]: { backgroundColor, minimized = false }
    }
  } = useProcesses();
  const { foregroundId } = useSession();
  const isForeground = useMemo(() => id === foregroundId, [foregroundId, id]);
  const windowRef = useRef<HTMLElement | null>(null);
  const { zIndex, ...focusableProps } = useFocusable(id, windowRef);

  return (
    <RndWindow id={ id } style={{ zIndex }}>
      <StyledWindow
        foreground={ isForeground }
        minimized={ minimized }
        ref={ windowRef }
        style={{ backgroundColor }}
        { ...focusableProps }
      >
        <Titlebar id={ id } />

        { children }
      </StyledWindow>
    </RndWindow>
  );
};

export default Window;
