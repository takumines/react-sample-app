/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header css={headerStyle}>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </header>
  )
}

const headerStyle = css`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`

const SLink = styled(Link)`
  margin: 0 8px;
`