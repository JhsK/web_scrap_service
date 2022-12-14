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
  margin-bottom: 2rem;

  .form-control {
    padding-right: 3rem;
  }

  .icon {
    cursor: pointer;
    position: absolute;
    top: 15%;
    right: 2%;
  }
`;

export const OpenGraphWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  .card {
    position: relative;
    width: 32%;
    height: 260px;
    border: 1px solid rgba(0, 0, 0, 0.175);
    cursor: pointer;
    margin-bottom: 1.5rem;

    .card-img-top {
      object-fit: cover;
      height: 150px;
    }

    .card-title {
      font-size: 16px;
    }

    .card-text {
      font-size: 14px;
    }
  }
`;

export const CardCloseIcon = styled.div`
  position: absolute;
  top: 1%;
  right: 3%;
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
