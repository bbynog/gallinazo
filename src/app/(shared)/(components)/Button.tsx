'use client';

import type { PropsWithChildren } from 'react';

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick, children }: PropsWithChildren<ButtonProps>) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
