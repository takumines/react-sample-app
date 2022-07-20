/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import { FC, memo } from "react";

export const SearchInput: FC = memo(() => {
  return (
    <div css={containerStyle}>
      <Input placeholder="検索条件を入力"/>
      <div css={buttonWrapperStyle}>
        <PrimaryButton>検索</PrimaryButton>
      </div>
    </div>
  );
});

const containerStyle = css`
  display: flex;
  align-items: center;
`;

const buttonWrapperStyle = css`
  padding-left: 8px;
`;