import React, { useEffect } from "react";

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
        title: "오늘의 디저트",
        description: "아메리카노, 빵, 케익",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
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
  return <div onClick={shareKakao}>카카오톡</div>;
};

export default Share;
