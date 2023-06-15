import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../elements/inputs/TextInput';
import SelectInput from '../elements/inputs/SelectInput';
import { Link } from 'react-router-dom';

const InitialData = ({ formData, setFormData }) => {
  const [ready, setReady] = useState(false);
  const checkData = () => {
    if (
      formData.phone === '' ||
      isNaN(formData.phone) ||
      formData.phone.length < 8
    ) {
      alert("Phone number isn't valid");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Invalid email');
    } else if (formData.documentID === '' || formData.documentID.length < 7) {
      alert('Invalid ID number');
    } else if (formData.TnCAgreement === false) {
      alert('Please accept TnC');
    } else {
      setReady((prevStatus) => !prevStatus);
    }
  };
  return (
    <>
      <TextInput
        type='text'
        value={formData.phone}
        name='phone'
        placeholder='Phone'
        icon='fa-solid fa-mobile-screen-button'
        onChange={(e) => {
          setFormData({ ...formData, phone: e.target.value });
        }}
      />
      <TextInput
        type='email'
        value={formData.email}
        name='email'
        placeholder='Email'
        icon='fa-solid fa-envelope'
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <SelectInput
        options={['DNI', 'Passport', 'LC', 'LE']}
        value={formData.documentType}
        name='document'
        icon={
          formData.documentType === 'dni'
            ? 'fa-solid fa-id-card'
            : formData.documentType === 'passport'
            ? 'fa-solid fa-passport'
            : formData.documentType === 'lc'
            ? 'fa-solid fa-pager'
            : 'fa-solid fa-pager'
        }
        onChange={(e) => {
          setFormData({ ...formData, documentType: e.target.value });
        }}
      />

      <TextInput
        type='text'
        value={formData.documentID}
        name='documentNumber'
        placeholder='Document number'
        icon='fa-solid fa-hashtag'
        onChange={(e) => {
          setFormData({ ...formData, documentID: e.target.value });
        }}
      />

      <TnC>
        <input
          type='checkbox'
          value={formData.TnCAgreement}
          checked={formData.TnCAgreement}
          onChange={(e) => {
            setFormData({
              ...formData,
              TnCAgreement: !formData.TnCAgreement,
            });
          }}
        />
        <p>
          TnC: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </TnC>

      <div className='footer'>
        {ready === false ? (
          <Link to='/initial-data'>
            <button onClick={checkData} className='primary-button'>
              Next
            </button>
          </Link>
        ) : (
          <Link to='/personal-data'>
            <button className='primary-button'>Next</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default InitialData;

const TnC = styled.div`
  width: 300px;
  display: flex;
  * {
    margin: 4px !important;
  }
  input {
    height: 13px;
    &:hover {
      cursor: pointer;
    }
  }
  p {
    font-weight: 600;
    word-spacing: 1px;
    line-height: 1.4;
    color: #788896;
    font-size: 12px;
  }
`;
