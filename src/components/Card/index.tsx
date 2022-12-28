import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { FlexContainer, StyledA, StyledCard } from './Card.styles';

const StyledLink = ({ href, name }: { href: string; name: string }) => (
  <Link href={href} passHref legacyBehavior>
    <StyledA>{name}</StyledA>
  </Link>
);

interface CardProps {
  title: string;
  href?: string;
}

export default function Card({
  title,
  href,
  children
}: PropsWithChildren<CardProps>) {
  return (
    <FlexContainer>
      <StyledCard>
        {href ? <StyledLink href={href} name={`${title}`} /> : title}
      </StyledCard>
    </FlexContainer>
  );
}
