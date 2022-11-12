import styled from '@emotion/styled';
import React from 'react';
import Toast from 'react-bootstrap/Toast';

const ToastWrapper = styled.div`
  position: absolute;
  bottom: 3%;
  left: 2%;
  z-index: 9999;
`;

interface ToastComponentProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  content: string;
}

const ToastComponent = ({ show, setShow, content }: ToastComponentProps) => (
  <ToastWrapper>
    <Toast onClose={() => setShow(false)} show={show} autohide delay={2000}>
      <Toast.Body>{content}</Toast.Body>
    </Toast>
  </ToastWrapper>
);

export default ToastComponent;
