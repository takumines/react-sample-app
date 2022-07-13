/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () => history.push("/users",{ isAdmin: true} )
  const onClickGeneral = () => history.push("/users", { isAdmin: false })
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