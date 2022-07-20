/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import {FC, memo} from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

type Props = {
  image: string,
  name: string
}

export const UserIconWithName: FC<Props> = memo((props: Props) => {
  const { image, name } = props;
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

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
      { isAdmin && <span css={editStyle}>編集</span> }
    </div>
  );
});

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

const editStyle = css`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;