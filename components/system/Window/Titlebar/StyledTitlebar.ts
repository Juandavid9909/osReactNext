import styled from "styled-components";

const StyledTitlebar = styled.header`
  background-color: ${ ({ theme }) => theme.colors.titlebar.background };
  border-bottom: 1px solid #000;
  display: flex;
  height: ${ ({ theme }) => theme.sizes.titlebar.height };

  h1 {
    color: ${ ({ theme }) => theme.colors.titlebar.text };
    display: flex;
    flex-grow: 1;
    font-size: ${ ({ theme }) => theme.sizes.titlebar.fontSize };
    font-weight: normal;
    min-width: 0;

    figure {
      align-items: center;
      display: flex;
      min-width: inherit;

      img {
        height: ${ ({ theme }) => theme.sizes.titlebar.iconSize };
        image-rendering: pixelated;
        margin: ${ ({ theme }) => theme.sizes.titlebar.iconMargin };
        width: ${ ({ theme }) => theme.sizes.titlebar.iconSize };
      }

      figcaption {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  nav {
    display: flex;

    button {
      border-left: 1px solid #000;
      box-sizing: content-box;
      display: flex;
      place-content: center;
      place-items: center;
      width: ${ ({ theme }) => theme.sizes.titlebar.buttonWidth };

      svg {
        fill: ${ ({ theme }) => theme.colors.titlebar.text };
        margin: 0 1px 2px 0;
        width: ${ ({ theme }) => theme.sizes.titlebar.buttonIconWidth };
      }

      &.minimize {
        svg {
          margin-bottom: 1px;
        }
      }

      &:hover {
        background-color: ${ ({ theme }) => theme.colors.titlebar.backgroundHover };

        &.close {
          background-color: ${ ({ theme }) => theme.colors.titlebar.closeHover };
          transition: background-color 0.25s ease;
        }
      }

      &:disabled {
        svg {
          fill: rgb(50, 50, 50);
        }

        &:hover {
          background-color: inherit;
        }
      }
    }
  }
`;

export default StyledTitlebar;
