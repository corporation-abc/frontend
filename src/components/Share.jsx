import React, { useEffect } from "react";
import { LuShare } from "react-icons/lu";

const Share = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js";
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init("32352373cab72e30b5db41881e74bb7a");
      }
    };
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "당근당근",
        description: "당근당근",
        imageUrl:
          "https://src.hidoc.co.kr/image/lib/2021/9/3/1630652987056_0.jpg",
        link: {
          mobileWebUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: window.location.origin,
          },
        },
      ],
    });
  };
  return <LuShare onClick={shareKakao} />;
};

export default Share;
