import { ReactNode } from 'react';

interface FooterProps {
  children: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return <footer className="border-t py-2 px-4 relative">{children}</footer>;
}
