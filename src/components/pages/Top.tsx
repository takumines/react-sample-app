/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  const setUserInfo = useSetRecoilState(userState)
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true })
    history.push("/users");
  }
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false })
    history.push("/users")
  }

  return (
    <div css={containerStyle}>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br/>
      <br/>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </div>
  );
};

const containerStyle = css`
  text-align: center;
`;