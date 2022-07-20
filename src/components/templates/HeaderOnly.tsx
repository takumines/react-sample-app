import { Header } from "../atoms/layout/Header";
import { FC, ReactNode } from "react";

type Props = { children: ReactNode }

export const HeaderOnly: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header/>
      {children}
    </>
  );
};
