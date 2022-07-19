/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header css={headerStyle}>
      <Link css={linkStyle} to="/">HOME</Link>
      <Link css={linkStyle} to="/users">USERS</Link>
    </header>
  );
}

const headerStyle = css`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const linkStyle = css`
  margin: 0 8px;
`;