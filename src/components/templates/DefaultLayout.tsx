import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";
import { FC, ReactNode } from "react";

type Props = { children: ReactNode }

export const DefaultLayout: FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};
