/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { BaseButtonStyle } from "./BaseButton";
import React, { FC } from "react";

type Props = {
  children: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const SecondaryButton: FC<Props>  = (props) => {
  const { children, onClick } = props;
  return <button css={buttonStyle} onClick={onClick}>{children}</button>;
};

const buttonStyle = css`
  ${BaseButtonStyle}
  background-color #11999e;
`;