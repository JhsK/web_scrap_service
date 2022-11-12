import React, { useEffect, useState } from 'react';
import { ContentsWrapper, IntroWrapper, PostRegister } from './style';

const Intro = () => {
  useEffect(() => {
    const userName = localStorage.getItem('userName');
    console.log(userName, typeof userName);
    if (userName === 'null' || userName === null) {
      // eslint-disable-next-line no-alert
      const inputUserName = window.prompt(
        '사용자명을 입력해주세요! 이후 변경할 수 없습니다.'
      ) as string;
      localStorage.setItem('userName', inputUserName);
    }
  }, []);

  return (
    <ContentsWrapper>
      <IntroWrapper>
        <div className="intro">
          <h1>나만의 사이트 저장소 사용법</h1>
          <p>
            나만의 사이트 저장소는🎉 평소에 인터넷을 하면서 나중에 봐야지 하는 사이트를 더이상
            카카오톡❌ 나만의 채팅이나 따로 메모❌하지 않고 손쉽게 저장하여 언제든 다시 볼 수 있도록
            하는 서비스입니다😄
          </p>
        </div>
        <div className="intro">
          <h2>사용법 및 주의 사항</h2>
          <p>
            - 디렉터리는 루트와 서브 디렉터리 2가지 종류로 구분되어 있습니다 <br />- 디렉터리 추가는
            왼쪽의 스크랩 저장 폴더와 루트 디렉터리에서 각각 추가할 수 있습니다 <br />- 디렉터리의
            정보 및 저장한 사이트의 정보는 사용자의 로컬 브라우저에 저장되기 때문에 브라우저 캐시
            지우기 및 다른 컴퓨터 브라우저로 사용시에는 저장된 데이터를 사용할 수 없습니다.
          </p>
        </div>
      </IntroWrapper>
    </ContentsWrapper>
  );
};

export default Intro;
