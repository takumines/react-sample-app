/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC, ReactNode } from "react";

type Props = { children: ReactNode }

export const Card:FC<Props> = (props: Props) => {
  const { children } = props;
  return <div css={cardStyle}>{children}</div>;
};

const cardStyle = css`
  background-color: #fff;
  box-shadow: #ddd 0 0 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
