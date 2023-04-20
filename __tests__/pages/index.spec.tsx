import { render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";

import defaultTheme from "themes/default.json";

import Index from "pages/index";

test("renders index page" , () => {
  const { getByText } = render(
    <ThemeProvider theme={ defaultTheme }>
      <Index/>
    </ThemeProvider>
  );

  const helloWorldElement = getByText("Hello, World!");

  expect(helloWorldElement).toBeInTheDocument()
});
