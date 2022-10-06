import React from "react";
import { useNavigate } from "react-router-dom";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const Navigate = useNavigate();
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  // 서비스 문의 클릭
  const handleServiceQuestion = () => {
    console.log("여기");
    const botMessage = createChatBotMessage(
      `'달달하개' 는 반려견을 위한 맞춤 용품 구독 서비스입니다 
어떤 것이 궁금하신가요 ? 🧐`,
      {
        widget: "serviceOptions",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  // 서비스 문의 -> 서비스 소개 클릭
  const handleServiceInfo = () => {
    console.log("여기");
    const botMessage = createChatBotMessage(
      `'달달하개' 는 반려견을 위한 
맞춤 반려견 용품 구독 서비스입니다.

항상 고르기 어려운 
우리 아이 사료 & 간식 & 장난감😥

달달하개로 쉽게 받아보세요😍

추천 받은 제품들 중 
원하는 제품을 선택하세요 

받은 제품이 맘에 들지 않는다면
1회 교환도 가능해요. 

지금 바로 시작하세요🐾
`,
      {
        widget: "lastOptions",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // 서비스 문의 -> 추천 알고리즘 클릭
  const handleAlgorithmInfo = () => {
    const botMessage = createChatBotMessage(
      `'달달하개' 는 다양한 정보를 바탕으로
제품을 추천해줍니다.

1. 사용자의 펫 정보

2. 사용자의 제품 사용 리뷰 

3. 다른 유저의 제품 사용 리뷰 

당신의 반려견에게
딱 맞는 제품을 추천해줍니다😍

지금 바로 시작하세요🐾
`,
      {
        widget: "lastOptions",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleStart = () => {
    Navigate("/subscribeList");
  };
  const handleBack = () => {
    const botMessage = createChatBotMessage(
      `안녕하세요 달달하개입니다.
어떤 것이 궁금하신가요 ? 🧐`,
      {
        widget: "options",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  //구독목록 문의
  const handleSubscribeQuestion = () => {
    const botMessage = createChatBotMessage(
      `'달달하개' 는 다양한 종류의
구독 서비스가 있습니다.

[ 👍 달달's Choice ] 

😍 Basic Package
( 사료 1개월 )
든든한 한달을 위한 기본 구성

😍 Play Package
( 간식 3종 + 장난감 2종 )
반려견의 놀이 생활을 위한 구성

😍All In One Package
(사료 1개월+간식 3종+장난감 2종)
사료, 간식, 장난감 꽉 찬 구성

[Other Options]

😀 DalDal Package
( 사료 1개월 + 간식 3종 )

😀 Toy Package
( 사료 1개월 + 장난감 2종 )

😀 Light All Package
(사료 1개월+간식 1종+장난감 1종)

⭐나만의 구독 패키지⭐
원하는 구성으로 직접 만드는 구독

더 자세한 설명을 알고 싶다면
상품 목록을 참고해주세요.
`,
      {
        widget: "lastOptions",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  //결제 문의
  const handlePaymentQuestion = () => {
    const botMessage = createChatBotMessage(
      `결제는 KakaoPay를 통해 
가능합니다 💳

😀 구독 시작날 기준으로 매달 결제

😀 도중 구독 해지 시 
     결제일 기준으로 배송됩니다.

추가 문의 사항은 
고객센터로 연락바랍니다.

고객 센터 번호
📞 1600-0000

문의 가능 시간
🕘 오전 9시 - 오후 6시
`,
      {
        widget: "lastOptions",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  //기타 문의
  const handleEtcQuestion = () => {
    const botMessage = createChatBotMessage(
      `기타 문의는 고객센터로
연락 부탁드립니다 😊

고객 센터 번호
📞 1600-0000

문의 가능 시간
🕘 오전 9시 - 오후 6시
`,
      {
        widget: "lastOptions",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleServiceQuestion,
            handleServiceInfo,
            handleAlgorithmInfo,
            handleStart,
            handleBack,
            handleSubscribeQuestion,
            handlePaymentQuestion,
            handleEtcQuestion,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
