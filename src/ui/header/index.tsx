import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HeaderWrapper } from './style';

function Header() {
  return (
    <HeaderWrapper>
      <div>왼쪽 부분</div>
      <div>오른쪽 부분</div>
    </HeaderWrapper>
  );
}

export default Header;
