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
        title: "웅기모띵",
        description: "딩가딩가딩",
        imageUrl:
          "https://steamuserimages-a.akamaihd.net/ugc/94982268567699578/6150E77455C3B3580DA622A61DE078AEA73EE82A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=trueg",
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
