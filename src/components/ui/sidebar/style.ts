import styled from '@emotion/styled';

export const ErrorText = styled.span`
  font-size: 0.8rem;
  color: red;
`;

export const SidebarWrapper = styled.div`
  min-width: 300px;
  width: 300px;
  height: 800px;
  background-color: #fbfbfa;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 12px 0 0 12px;
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
    border-radius: 12px 0 0 0;
    .icon {
      visibility: visible;
    }
  }
`;

export const RootDirectoryAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.7rem;
  opacity: 0.4;
  margin-bottom: 0.5rem;

  div:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const DirectoryWrapper = styled.div`
  padding: 0 1rem;
`;

export const RootAndSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RootDirectory = styled.div`
  padding: 0.5rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #ebebea;

    .directoryRight {
      visibility: visible;
    }
  }

  .directoryLeft {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .directoryRight {
    visibility: hidden;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

export const SubDirectory = styled(RootDirectory)`
  padding-left: 1rem;
`;

export const Input = styled.input`
  width: 100px;
`;

export const DirectoryIcon = styled.div`
  opacity: 0.5;
`;
