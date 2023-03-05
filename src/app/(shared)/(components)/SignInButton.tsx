'use client';

import { signIn } from 'next-auth/react';
import type { PropsWithChildren } from 'react';
import Button from './Button';

const SignInButton = ({ children }: PropsWithChildren) => {
  return <Button onClick={() => signIn()}>{children}</Button>;
};

export default SignInButton;
