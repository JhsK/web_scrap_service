import styled from '@emotion/styled';
import React from 'react';
import Toast from 'react-bootstrap/Toast';

const ToastWrapper = styled.div`
  position: absolute;
  bottom: 3%;
  left: 2%;
  z-index: 9999;
`;

const ToastComponent = () => (
  <ToastWrapper>
    <Toast show autohide delay={2000}>
      <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
    </Toast>
  </ToastWrapper>
);

export default ToastComponent;
