/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <div css={containerStyle}>
      <img
        css={imageStyle}
        height={160}
        width={160}
        src={image}
        alt={name}
      />
      <p css={nameStyle}>{name}</p>
    </div>
  );
};

const containerStyle = css`
  text-align: center;
`;

const imageStyle = css`
  border-radius: 50%;
`;

const nameStyle = css`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;