import React, { useState } from 'react';
import styled from 'styled-components';
import WebcamCapture from './WebcamCapture';

const MediaUpload = ({ formData, setFormData }) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(() => step + 1);
  };
  return (
    <>
      {step === 0 ? (
        <StepContent>
          <div className='message'>
            Congratulations! <br />
            Your account has been created!
          </div>
          <button onClick={handleNext} className='primary-button'>
            Next steps
          </button>
        </StepContent>
      ) : step === 1 ? (
        <StepContent>
          <div className='message'>
            Now, let's validate your identity with just 3 pictures. <br />
            Please keep you ID at hand.
          </div>
          <button onClick={handleNext} className='primary-button'>
            Start validation
          </button>
        </StepContent>
      ) : step === 2 ? (
        <StepContent>
          <div className='message'>Take a photo of the front of your id</div>
          <WebcamCapture
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        </StepContent>
      ) : step === 3 ? (
        <StepContent>
          <div className='message'>
            Great! now a photo from the back of your id
          </div>
          <WebcamCapture
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        </StepContent>
      ) : step === 4 ? (
        <StepContent>
          <div className='message'>
            Now, a selfie where your face and ID are visible.
          </div>
          <WebcamCapture
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        </StepContent>
      ) : step === 5 ? (
        <StepContent>
          <div className='message'>
            Thank you for completing the validation process!
            <br />
            <br />
            We will be in contact shortly after confirming your information.
          </div>
          <button onClick={handleNext} className='primary-button'>
            Test: Review info
          </button>
        </StepContent>
      ) : (
        <StepContent>
          <ConfirmData>
            <div>
              <b>Initial Data</b>
              <br />
              {formData.phone}
              <br />
              {formData.email}
              <br />
              {formData.documentType}
              <br />
              {formData.documentID}
              <br />
              {formData.TnCAgreement === true ? 'TnC agreed' : 'TnC not agreed'}
            </div>
            <div>
              <b>Personal Data</b>
              <br />
              {formData.firstName}
              <br />
              {formData.middleNames}
              <br />
              {formData.lastName}
              <br />
              {formData.cuil}
              <br />
              {formData.gender}
              <br />
              {formData.nationality}
              <br />
              {formData.birthCountry}
              <br />
              {formData.dateOfBirth}
              <br />
            </div>
            <div>
              <b>Address Data</b>
              <br />
              {formData.country}
              <br />
              {formData.province}
              <br />
              {formData.city}
              <br />
              {formData.streetName +
                ' ' +
                formData.streetNumber +
                ' ' +
                formData.addressDetails}
              <br />
              {formData.postalCode}
              <br />
            </div>
            <div>
              <b>Legal Questions</b>
              <br />
              {formData.soi === true ? 'soi' : ' not soi'}
              <br />
              {formData.pep === true ? 'pep' : ' not pep'}
              <br />
              {formData.fatca === true ? 'fatca' : ' not fatca'}
              <br />
              {formData.noLegalCondition === true
                ? 'noLegalCondition'
                : ' LegalCondition'}
              <br />
              {formData.paysTaxesAbroad === true
                ? 'paysTaxesAbroad'
                : "Doesn't paysTaxesAbroad"}
              <br />
              {formData.paysTaxesAbroad === true
                ? 'lawfulFunds'
                : "Doesn't have lawfulFunds"}
              <br />
            </div>
            <div>
              <b>Bank Info</b>
              <br />
              {formData.bankAccount}
              <br />
              {formData.bankAccountType}
              <br />
              {formData.bankAccountCurrency}
              <br />
              {formData.bank}
              <br />
            </div>
            <div>
              <b>Images</b>
              <br />
              <ConfirmImage alt='img1' src={formData.dniFront}></ConfirmImage>
              <ConfirmImage alt='img2' src={formData.dniBack}></ConfirmImage>
              <ConfirmImage alt='img3' src={formData.dniSelfie}></ConfirmImage>
            </div>
          </ConfirmData>
        </StepContent>
      )}
    </>
  );
};

export default MediaUpload;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  margin-top: -40px;
`;
const ConfirmImage = styled.img`
  width:100px;
  height 80px;
`;
const ConfirmData = styled.div`
  display: flex;
  flex-direction: column;
`;
