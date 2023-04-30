import { render, screen } from "@testing-library/react";
import StyledApp from "components/pages/StyledApp";
import Index from "pages/index";

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test("renders main role" , () => {
  render(
    <StyledApp>
      <Index/>
    </StyledApp>
  );

  expect(screen.getByRole("main")).toBeInTheDocument();
});
