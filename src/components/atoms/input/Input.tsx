/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <input css={inputStyle} type="text" placeholder={placeholder}/>;
}

const inputStyle = css`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;