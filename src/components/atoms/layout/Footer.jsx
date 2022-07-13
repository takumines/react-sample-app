/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export const Footer = () => {
  return (
    <footer css={footerStyle}>
      &copy; 2022 test Inc.
    </footer>
  );
}

const footerStyle = css`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;