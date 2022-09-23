import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const SignupPost = (props) => {
    const { setFullAddress, setPopup, setPostZip } = props

    const onCompletePost = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        setPostZip(data.zonecode)
        setFullAddress(fullAddress)
        setPopup(false)
    };

    const backDiv = {
        backgroundColor: 'rgba(0,0,0,0.25)',
        display: "block",
        position: "absolute",
        top: "0",
        left: '0',
        width: "100%",
        height: "100vh",
        zIndex: 100,
    };

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "20%",
        left: '40%',
        width: "20%",
        height: "500px",
        padding: "7px",
        zIndex: 200,
    };

    return (
        <>
            <div style={backDiv} onClick={() => setPopup(false)}>
                <DaumPostcode
                    style={postCodeStyle}
                    onComplete={onCompletePost}
                />
            </div>

        </>
    );
};

export default SignupPost;