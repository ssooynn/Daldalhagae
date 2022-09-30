import { createChatBotMessage } from "react-chatbot-kit";
import styled from "styled-components";
import botImage from "../../assets/img/pawprint2.png";
import userImage from "../../assets/img/user1.png";
import { StyledText } from "../CommonComponent";
import { FlexBox } from "../MainComponent";
import DogPicture from "./widgets/DogPicture";
import LastOptions from "./widgets/LastOptions";
import Options from "./widgets/Options";
import ServiceOptions from "./widgets/ServiceOptions";

const StyledBotImg = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${botImage});
  object-fit: cover;
  background-size: cover;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledUserImg = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${userImage});
  object-fit: cover;
  background-size: cover;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

const BotAvatar = () => {
  return (
    <FlexBox
      direction="column"
      justify="center"
      align="center"
      height="auto"
      width="auto"
      margin="0px"
    >
      <StyledBotImg />
      <StyledText size="10px" weight="500" margin="1px" color="#776B62">
        달달하개
      </StyledText>
    </FlexBox>
  );
};

const UserAvatar = () => {
  return <StyledUserImg />;
};

const config = {
  botName: "달달하개",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#EDDCCF",
      color: "#e1c4ae",
    },
    chatButton: {
      backgroundColor: "#776B6E9",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `안녕하세요 달달하개입니다.
어떤 것이 궁금하신가요 ? 🧐`,
      {
        widget: "options",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "serviceOptions",
      widgetFunc: (props) => <ServiceOptions {...props} />,
    },
    {
      widgetName: "lastOptions",
      widgetFunc: (props) => <LastOptions {...props} />,
    },
  ],
};

export default config;
