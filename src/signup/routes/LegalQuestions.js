import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LegalQuestions = ({ formData, setFormData }) => {
  const [ready, setReady] = useState(false);

  const checkData = () => {
    if (
      formData.soi === false &&
      formData.pep === false &&
      formData.fatca === false &&
      formData.noLegalCondition === false
    ) {
      alert('please review your selections');
    } else {
      setReady((prevStatus) => !prevStatus);
    }
  };

  return (
    <>
      <h4>Are you included in any of the following groups?</h4>
      <InputsContainer>
        <InputWithLabel>
          <input
            id='soi'
            type='checkbox'
            checked={formData.soi}
            value={formData.soi}
            onChange={(e) => {
              if (
                formData.soi === false &&
                formData.noLegalCondition === true
              ) {
                setFormData({
                  ...formData,
                  soi: !formData.soi,
                  noLegalCondition: false,
                });
              } else {
                setFormData({
                  ...formData,
                  soi: !formData.soi,
                });
              }
            }}
          />
          <label for='postalCode'>SOI</label>
        </InputWithLabel>
        <InputWithLabel>
          <input
            id='pep'
            type='checkbox'
            checked={formData.pep}
            value={formData.pep}
            onChange={(e) => {
              if (
                formData.pep === false &&
                formData.noLegalCondition === true
              ) {
                setFormData({
                  ...formData,
                  pep: !formData.pep,
                  noLegalCondition: false,
                });
              } else {
                setFormData({
                  ...formData,
                  pep: !formData.pep,
                });
              }
            }}
          />
          <label for='postalCode'>PEP</label>
        </InputWithLabel>
        <InputWithLabel>
          <input
            id='fatca'
            type='checkbox'
            checked={formData.fatca}
            value={formData.fatca}
            onChange={(e) => {
              if (
                formData.fatca === false &&
                formData.noLegalCondition === true
              ) {
                setFormData({
                  ...formData,
                  fatca: !formData.fatca,
                  noLegalCondition: false,
                });
              } else {
                setFormData({
                  ...formData,
                  fatca: !formData.fatca,
                });
              }
            }}
          />
          <label for='postalCode'>FATCA</label>
        </InputWithLabel>
        <InputWithLabel>
          <input
            id='noLegalCondition'
            type='checkbox'
            checked={formData.noLegalCondition}
            value={formData.noLegalCondition}
            onChange={(e) => {
              if (formData.noLegalCondition === false) {
                setFormData({
                  ...formData,
                  noLegalCondition: !formData.noLegalCondition,
                  fatca: false,
                  pep: false,
                  soi: false,
                });
              } else {
                setFormData({
                  ...formData,
                  noLegalCondition: !formData.noLegalCondition,
                });
              }
            }}
          />
          <label for='postalCode'>None of the above</label>
        </InputWithLabel>
        <small>
          Unsure?
          <a href='https://www.google.com/' rel='noreferrer' target='_blank'>
            Click here for more info
          </a>
          <i class='fa-solid fa-right-from-bracket'></i>
        </small>
      </InputsContainer>
      <h4>Do you pay taxes in other countries besides Argentina?</h4>
      <InputsContainer>
        <InputWithLabel>
          <input
            name='paysTaxesAbroad'
            type='radio'
            value='yes'
            checked={formData.paysTaxesAbroad === true}
            onChange={(e) => {
              if (e.target.value === 'yes') {
                setFormData({ ...formData, paysTaxesAbroad: true });
              }
            }}
          />
          <label for='paysTaxesAbroad'>Yes</label>
        </InputWithLabel>
        <InputWithLabel>
          <input
            name='paysTaxesAbroad'
            type='radio'
            value='no'
            checked={formData.paysTaxesAbroad === false}
            onChange={(e) => {
              if (e.target.value === 'no') {
                setFormData({ ...formData, paysTaxesAbroad: false });
              }
            }}
          />
          <label for='paysTaxesAbroad'>No</label>
        </InputWithLabel>
      </InputsContainer>
      <h4>Are your funds lawful?</h4>
      <InputsContainer>
        <InputWithLabel>
          <input
            name='lawfulFunds'
            type='radio'
            value='yes'
            checked={formData.lawfulFunds === true}
            onChange={(e) => {
              if (e.target.value === 'yes') {
                setFormData({ ...formData, lawfulFunds: true });
              }
            }}
          />
          <label for='lawfulFunds'>Yes</label>
        </InputWithLabel>
        <InputWithLabel>
          <input
            name='lawfulFunds'
            type='radio'
            value='no'
            checked={formData.lawfulFunds === false}
            onChange={(e) => {
              if (e.target.value === 'no') {
                setFormData({ ...formData, lawfulFunds: false });
              }
            }}
          />
          <label for='lawfulFunds'>No</label>
        </InputWithLabel>
      </InputsContainer>

      <div className='footer'>
        {ready === false ? (
          <Link to='/legal-questions'>
            <button onClick={checkData} className='primary-button'>
              Next
            </button>
          </Link>
        ) : (
          <Link to='/bank-data'>
            <button className='primary-button'>Next</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default LegalQuestions;

const InputsContainer = styled.div`
  padding: 16px 0 32px;
`;

const InputWithLabel = styled.div`
  display: flex;
  align-items: center;
  margin: 4px;
  input {
    margin-right: 4px;
  }
`;
