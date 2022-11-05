import styled from '@emotion/styled';
import React from 'react';
import { Toast } from 'react-bootstrap';

interface UseToastProps {
  content: string;
}

const ToastWrapper = styled.div`
  position: absolute;
  bottom: 3%;
  left: 2%;
  z-index: 9999;
`;

const useToast = ({ content }: UseToastProps) => (
  <ToastWrapper>
    <Toast show autohide delay={2000}>
      <Toast.Body>{content}</Toast.Body>
    </Toast>
  </ToastWrapper>
);

export default useToast;
