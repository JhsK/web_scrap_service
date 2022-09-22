import styled from '@emotion/styled';

export const SidebarWrapper = styled.div`
  width: 300px;
  height: 600px;
  background-color: #fbfbfa;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* padding: 0 1rem; */
`;

export const UserNameWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .icon {
    cursor: pointer;
    visibility: hidden;
  }

  &:hover {
    background-color: #ebebea;
    .icon {
      visibility: visible;
    }
  }
`;

export const DirectoryWrapper = styled.div`
  padding: 0 1rem;

  .title {
    font-size: 0.7rem;
    opacity: 0.4;
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export const Directory = styled.div`
  padding: 0.5rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #ebebea;
  }
`;

export const Input = styled.input`
  width: 100px;
`;

export const DirectoryIcon = styled.div`
  opacity: 0.5;
`;

export const DirectoryLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const DirectoryRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
