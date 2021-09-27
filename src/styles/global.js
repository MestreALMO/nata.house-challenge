import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --main-font: #F7E21E;

  --max-width-app: 60rem;

  --padding-section: 2rem;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body, #root {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  background: #000;
  color: var(--main-font);
}

a {
  color: inherit;
  text-decoration: inherit;
}

.react-modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  width: var(--max-width-app);
  background: #000;
  border-radius: 1rem;
  border: solid var(--main-font);
  max-height: 100%;
  max-width: 100%;
  position: relative;
}

.react-modal-close-button {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  background: transparent;
  color: inherit;
  border: none;
  font-size: 3rem;
  z-index: 9999;

  &:hover {
    cursor: pointer;
  }
}
`;

export default GlobalStyle;
