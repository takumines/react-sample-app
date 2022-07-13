/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { BaseButtonStyle } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props
  return <button css={buttonStyle}>{children}</button>;
};

const buttonStyle = css`
  ${BaseButtonStyle}
  background-color: #11999e;
`