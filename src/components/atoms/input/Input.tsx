/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC } from "react";

type Props = { placeholder: string }

export const Input: FC<Props> = (props: Props) => {
  const { placeholder = "" } = props;
  return <input css={inputStyle} type="text" placeholder={placeholder}/>;
}

const inputStyle = css`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;