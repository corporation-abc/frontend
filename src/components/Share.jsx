import React, { useEffect } from 'react';
import { LuShare } from 'react-icons/lu';
import { useRecoilValue } from 'recoil';
import { legoResult } from '../store/result';

const Share = () => {
  const result = useRecoilValue(legoResult);

  console.log(result.url);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js';
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init('32352373cab72e30b5db41881e74bb7a');
      }
    };
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: result.name,
        description: result.class_name,
        imageUrl: result.image,
        link: {
          mobileWebUrl: result.url,
        },
      },
      buttons: [
        {
          title: '레고 보러가기',
          link: {
            mobileWebUrl: result.url,
          },
        },
      ],
    });
  };
  return <LuShare onClick={shareKakao} />;
};

export default Share;
