import React from 'react';
import Header from '../header';
import { LayoutWrapper } from './style';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      {/* <Header /> */}
      <Sidebar />
      {children}
    </LayoutWrapper>
  );
}

export default Layout;
