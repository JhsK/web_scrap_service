import styled from '@emotion/styled';

export const ContentsWrapper = styled.div`
  width: 100%;
  padding: 3rem 2rem;

  .intro {
    h1 {
      font-size: 1.5rem;
    }

    p {
      margin-top: 1rem;
    }

    h2 {
      font-size: 1.3rem;
    }
  }
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const PostRegister = styled.div`
  width: 100%;
  position: relative;

  .icon {
    cursor: pointer;
    position: absolute;
    top: 15%;
    right: 2%;
  }
`;
