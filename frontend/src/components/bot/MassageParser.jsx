// in MessageParser.jsx
import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        if (message.includes('hello')) {
            actions.handleHello();
        }

        if (message.includes('서비스')) {
            actions.handleServiceQuestion();
        } else if (message.includes('구독')) {
            actions.handleSubscribeQuestion();
        } else if (message.includes('알고리즘')) {
            actions.handleAlgorithmInfo();
        } else if (message.includes('추천')) {
            actions.handleAlgorithmInfo();
        } else if (message.includes('전화')) {
            actions.handleEtcQuestion();
        } else if (message.includes('패키지')) {
            actions.handleSubscribeQuestion();
        } else if (message.includes('베이직') || message.includes('Basic') || message.includes('플레이') || message.includes('Play') || message.includes('All In One') || message.includes('올인원') || message.includes('Toy') || message.includes('Light') || message.includes('나만의')) {
            actions.handleSubscribeQuestion();
        } else if (message.includes("카카오페이")) {
            actions.handlePaymentQuestion();
        } else if (message.includes('결제')) {
            actions.handlePaymentQuestion();
        } else if (message.includes("달달하개")) {
            actions.handleServiceQuestion();
        } else {
            actions.handleEtcQuestion();
        }



    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;