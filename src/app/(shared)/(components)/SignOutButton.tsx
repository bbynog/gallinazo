'use client';

import { signOut } from 'next-auth/react';
import type { PropsWithChildren } from 'react';
import Button from './Button';

const SignOutButton = ({ children }: PropsWithChildren) => {
  return (
    <Button
      onClick={() => {
        signOut().catch((error) => console.log('error', error));
      }}
    >
      {children}
    </Button>
  );
};

export default SignOutButton;
