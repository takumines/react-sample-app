/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    name: `太郎-${val}`,
    email: "test@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト会社",
    },
    website: "https://google.com"
  };
}))

export const Users = () => {
  return (
    <div css={containerStyle}>
      <h2>ユーザー一覧</h2>
      <SearchInput/>
      <div css={userAreaStyle}>
        {users.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))}
      </div>
    </div>
  );
};

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const userAreaStyle = css`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`