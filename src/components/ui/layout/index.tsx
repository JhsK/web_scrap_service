import React from 'react';
import Header from '../header';
import { BodyWrapper, LayoutWrapper } from './style';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <BodyWrapper>
        <Sidebar />
        {children}
      </BodyWrapper>
    </LayoutWrapper>
  );
}

export default Layout;
