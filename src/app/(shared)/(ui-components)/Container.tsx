import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className={'flex flex-col'}>{children}</div>;
};

export default Container;
