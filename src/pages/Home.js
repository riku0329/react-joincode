import React from 'react';
import {
  PageLayouts,
} from '../components/common';
import styled from 'styled-components';

import HeaderImage from '../img/group.png';

const HomeHeader = styled.header`
  height: 60vh;
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  .header_title{
    margin-top: 50px;
    z-index: 1;
    position: relative;
    color: ${(p) => p.theme.SECONDARY_TEXT};
  }

  @media (max-width: 768px) {
    height: 50vh;
  }

  h2{
    font-size: 6rem;
  }

  .header_icon {
    top: 0;
    right: 0;
    position: absolute;
    max-width: 600px;
  }
`;

const CodeStyled = styled.div`
  background: ${(p) => p.theme.BASE2};
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  text-align: center;
`;

export default function Home() {
  return (
    <PageLayouts>
      <HomeHeader>
        <div>
          <div className='header_title'>
            <h2>レッスンを開始しよう！</h2>
          </div>
          <div className='header_icon'>
            <img src={HeaderImage} alt='header-image' />
          </div>
        </div>
      </HomeHeader>
      <CodeStyled>
      </CodeStyled>
    </PageLayouts>
  );
}
