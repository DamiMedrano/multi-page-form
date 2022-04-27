import axios from 'axios';
import React, { useState, useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const WebcamCapture = ({ step, setStep, formData, setFormData }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imgSrc = webcamRef.current.getScreenshot();
    setImgSrc(imgSrc);
  }, [webcamRef, setImgSrc]);
  return (
    <>
      {imgSrc == null ? (
        <WebcamContainer>
          <Webcam
            height={340}
            audio={false}
            ref={webcamRef}
            screenshotFormat='image/jpeg'
          />
          {step === 2 || step === 3 ? <IdFrame /> : ''}

          <RedCircle onClick={capture}></RedCircle>

          <HiddenUpload
            type='file'
            accept='image/*'
            onChange={(e) => {
              setImgSrc(e.target.files[0]);
            }}
          />
          <UploadFromDevice>Or upload From Your Device</UploadFromDevice>
        </WebcamContainer>
      ) : (
        <WebcamContainer>
          <img src={imgSrc} />
          <ConfirmMessage>Does this look good?</ConfirmMessage>
          <WebCamButtons>
            <button
              className='primary-button'
              onClick={() => {
                if (step === 2) {
                  setFormData({ ...formData, dniFront: imgSrc });
                }
                if (step === 3) {
                  setFormData({ ...formData, dniBack: imgSrc });
                }
                if (step === 4) {
                  setFormData({ ...formData, dniSelfie: imgSrc });
                }
                setImgSrc(null);
                setStep(() => step + 1);
              }}
            >
              Confirm
            </button>
            <button
              className='secondary-button'
              onClick={() => {
                setImgSrc(null);
              }}
            >
              Retake
            </button>
          </WebCamButtons>
        </WebcamContainer>
      )}
    </>
  );
};

export default WebcamCapture;

const ConfirmMessage = styled.div`
  margin: 40px 0px 20px;
`;

const WebcamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
`;

const WebCamButtons = styled.div`
  display: flex;
`;

const RedCircle = styled.div`
  margin-top: 60px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: red;
  border: 3px solid #fafafa;
  outline: 3px solid red;
  cursor: pointer;
`;

const IdFrame = styled.div`
  position: absolute;
  margin-top: 40px;
  height: 240px;
  width: 360px;
  border: 5px solid #fafafa;
  outline: 2px solid red;
  border-radius: 4px;
`;

const UploadFromDevice = styled.div`
  position: absolute;
  bottom: 0;
  height: 30px;
  margin-top: 180px;
  font-weight: 600;
  color: #7a7a7a;
`;

const HiddenUpload = styled.input`
  display: flex;
  justify-content: center;
  position: absolute;
  opacity: 0%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  height: 30px;
  cursor: pointer;
  z-index: 1;
`;

// More info:
// https://www.npmjs.com/package/react-webcam
