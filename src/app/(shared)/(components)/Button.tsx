'use client';

import type { PropsWithChildren } from 'react';

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick, children }: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={'btn'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
