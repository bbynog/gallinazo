'use client';

import { signIn } from 'next-auth/react';
import type { PropsWithChildren } from 'react';
import Button from './Button';

const SignInButton = ({ children }: PropsWithChildren) => {
  return (
    <Button
      onClick={() => {
        signIn().catch((error) => console.log('error', error));
      }}
    >
      {children}
    </Button>
  );
};

export default SignInButton;
