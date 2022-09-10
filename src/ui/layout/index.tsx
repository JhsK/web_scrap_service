import React from 'react';
import { LayoutWrapper } from './style';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default Layout;
