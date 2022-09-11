import React from 'react';
import Header from '../header';
import { LayoutWrapper } from './style';
import 'bootstrap/dist/css/bootstrap.min.css';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
}

export default Layout;
