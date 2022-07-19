/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { BaseButtonStyle } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <button css={buttonStyle} onClick={onClick}>{children}</button>;
};

const buttonStyle = css`
  ${BaseButtonStyle}
  background-color: #11999e;
`;