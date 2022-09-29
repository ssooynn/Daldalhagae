import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`안녕하세요 달달하개입니다.`)],
  botName: "달달하개",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#CCAA90",
      color: "#1f1d1d",
    },
    chatButton: {
      backgroundColor: "#776B6E9",
    },
  },
};

export default config;
