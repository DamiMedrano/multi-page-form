import React, { useState } from 'react';
import TextInput from '../elements/inputs/TextInput';
import SelectInput from '../elements/inputs/SelectInput';
import { Link } from 'react-router-dom';

const BankData = ({ formData, setFormData }) => {
  const [ready, setReady] = useState(false);
  const checkData = () => {
    if (formData.bankAccount.length < 22 || formData.bankAccount.length > 34) {
      alert('Enter a valid bank account number');
    } else if (formData.bank.length < 4) {
      alert('Enter a valid bank or entity');
    } else {
      setReady((prevStatus) => !prevStatus);
    }
  };

  return (
    <>
      <h3>
        To continue, please add a <br />
        bank account:
      </h3>
      <br />
      <TextInput
        type='text'
        value={formData.bankAccount}
        name='bankAccount'
        placeholder='Bank Account'
        icon='fa-solid fa-money-check-dollar'
        onChange={(e) => {
          setFormData({ ...formData, bankAccount: e.target.value });
        }}
      />
      <SelectInput
        options={['Savings Account', 'Checking Account', 'Other']}
        value={formData.bankAccountType}
        name='accountType'
        icon='fa-solid fa-money-check-dollar'
        onChange={(e) => {
          setFormData({ ...formData, bankAccountType: e.target.value });
        }}
      />
      <SelectInput
        options={['USD', 'ARS', 'Bimonetary']}
        value={formData.bankAccountCurrency}
        name='bankCurrency'
        icon='fa-solid fa-dollar-sign'
        onChange={(e) => {
          setFormData({ ...formData, bankAccountCurrency: e.target.value });
        }}
      />
      <TextInput
        type='text'
        value={formData.bank}
        name='bank'
        placeholder='Bank or Entity'
        icon='fa-solid fa-building'
        onChange={(e) => {
          setFormData({ ...formData, bank: e.target.value });
        }}
      />

      <div className='footer'>
        {ready === false ? (
          <Link to='/bank-data'>
            <button onClick={checkData} className='primary-button'>
              Next
            </button>
          </Link>
        ) : (
          <Link to='/media-upload'>
            <button onClick={console.log(formData)} className='primary-button'>
              Next
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default BankData;
