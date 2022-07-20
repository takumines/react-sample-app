/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { BaseButtonStyle } from "./BaseButton";
import { FC } from "react";

type Props = { children: string }

export const PrimaryButton: FC<Props> = (props: Props) => {
  const { children } = props;
  return <button css={buttonStyle}>{children}</button>;
};

const buttonStyle = css`
  ${BaseButtonStyle}
  background-color #40514e;
`;