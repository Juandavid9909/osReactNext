import StyledWindow from "styles/components/system/StyledWindow";

const Window: React.FC<any> = ({ children }) => (
  <StyledWindow>
    { children }
  </StyledWindow>
);

export default Window;
