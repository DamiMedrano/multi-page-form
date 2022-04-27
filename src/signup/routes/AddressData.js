import React, { useState } from 'react';
import TextInput from '../elements/inputs/TextInput';
import { Link } from 'react-router-dom';
import Subtitle from '../elements/Subtitle';

const AddressData = ({ formData, setFormData }) => {
  const [ready, setReady] = useState(false);
  const checkData = () => {
    if (formData.country.length < 4) {
      alert('Enter a valid country');
    } else if (formData.province.length < 4) {
      alert('Enter a valid province');
    } else if (formData.city.length < 4) {
      alert('Enter a valid city');
    } else if (formData.streetName.length < 4) {
      alert('Enter a valid address');
    } else if (formData.postalCode.length < 4) {
      alert('Enter a valid postal code');
    } else {
      setReady((prevStatus) => !prevStatus);
    }
  };

  return (
    <>
      <Subtitle text='Personal Data' icon='fa-solid fa-house-chimney' />
      <TextInput
        type='text'
        label='Country'
        value={formData.country}
        name='country'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, country: e.target.value });
        }}
      />
      <TextInput
        type='text'
        label='Province'
        value={formData.province}
        name='province'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, province: e.target.value });
        }}
      />
      <TextInput
        type='text'
        label='City'
        value={formData.city}
        name='city'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, city: e.target.value });
        }}
      />
      <TextInput
        type='text'
        label='Address 1'
        value={formData.streetName}
        name='streetName'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, streetName: e.target.value });
        }}
      />
      <TextInput
        type='text'
        label='Address 2'
        value={formData.streetNumber}
        name='streetNumber'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, streetNumber: e.target.value });
        }}
      />
      <TextInput
        type='text'
        label='Address 3'
        value={formData.addressDetails}
        name='addressDetails'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, addressDetails: e.target.value });
        }}
      />
      <TextInput
        type='text'
        label='Postal Code'
        value={formData.postalCode}
        name='postalCode'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, postalCode: e.target.value });
        }}
      />

      <div className='footer'>
        {ready === false ? (
          <Link to='/address-data'>
            <button onClick={checkData} className='primary-button'>
              Next
            </button>
          </Link>
        ) : (
          <Link to='/legal-questions'>
            <button onClick={console.log(formData)} className='primary-button'>
              Next
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default AddressData;
