import WindowsIcon from "components/system/Taskbar/StartButton/WindowsIcon";
import StyledStartButton from "components/system/Taskbar/StartButton/StyledStartButton";

const StartButton = (): JSX.Element => (
  <StyledStartButton title="Start">
    <WindowsIcon />
  </StyledStartButton>
);

export default StartButton;
