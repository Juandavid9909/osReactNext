import StyledStartButton from "styles/components/system/Taskbar/StyledStartButton";
import { WindowsIcon } from "../Icons";

const StartButton = (): JSX.Element => (
  <StyledStartButton title="Start">
    <WindowsIcon />
  </StyledStartButton>
);

export default StartButton;
