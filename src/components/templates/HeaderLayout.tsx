import { FC, memo, ReactNode } from 'react';
import Header from '../organisms/layout/Header';

type Props = {
  children: ReactNode
}

const HeaderLayout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default memo(HeaderLayout);
