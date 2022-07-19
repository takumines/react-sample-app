/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { BaseButtonStyle } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <button css={buttonStyle}>{children}</button>;
};

const buttonStyle = css`
  ${BaseButtonStyle}
  background-color: #40514e;
`;