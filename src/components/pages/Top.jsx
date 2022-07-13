/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export const Top = () => {
  return (
    <div css={containerStyle}>
      <h2>TOPページです</h2>
    </div>
  );
};

const containerStyle = css`
  text-align: center;
`;