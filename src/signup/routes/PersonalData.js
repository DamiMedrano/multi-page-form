import React, { useState, useEffect } from 'react';
import TextInput from '../elements/inputs/TextInput';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Subtitle from '../elements/Subtitle';

const PersonalData = ({ formData, setFormData }) => {
  const [ready, setReady] = useState(false);
  const url = 'https://api-gateway.staging.scala.ly/afip';
  const apikey = `Apikey ChTec.mnJeDQsJijJVdLZ409HHgcOnY1OnhZr4DgCvhzWebKqGnQX55M`;
  const getFromDNI = '/ws_sr_padron_a13/getIdPersonaListByDocumento?documento=';
  const getFromCUIL = '/ws_sr_padron_a13/getPersona?idPersona=';

  function getDataFromDNI(dni) {
    axios
      .get(url + getFromDNI + dni, {
        headers: {
          Authorization: apikey,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        const cuil = JSON.stringify(res.data.idPersona[1]);
        getDataFromCUIL(cuil);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getDataFromCUIL(cuil) {
    //personal data
    let apiFirstName = '';
    let apiMiddleNames = '';
    let apiLastName = '';
    let apiCuil = '';
    //address data
    let apiProvince = '';
    let apiCity = '';
    let apiStreetName = '';
    let apiStreetNumber = '';
    let apiAddressDetails = '';
    let apiPostalCode = '';

    axios
      .get(url + getFromCUIL + cuil, {
        headers: {
          Authorization: apikey,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((cuilResponse) => {
        apiFirstName = JSON.stringify(
          cuilResponse.data.persona.nombre.split(' ')[0]
        );
        apiMiddleNames = JSON.stringify(
          cuilResponse.data.persona.nombre
        ).substr(cuilResponse.data.persona.nombre.indexOf(' ') + 2);
        apiLastName = JSON.stringify(
          cuilResponse.data.persona.apellido.split(' ')[0]
        );
        apiCuil = JSON.stringify(cuilResponse.data.persona.idPersona);
        apiProvince = JSON.stringify(
          cuilResponse.data.persona.domicilio[0].descripcionProvincia
        );
        apiCity = JSON.stringify(
          cuilResponse.data.persona.domicilio[0].localidad
        );
        apiStreetName = JSON.stringify(
          cuilResponse.data.persona.domicilio[0].calle
        );
        apiStreetNumber = JSON.stringify(
          cuilResponse.data.persona.domicilio[0].numero
        );
        apiAddressDetails = JSON.stringify(
          cuilResponse.data.persona.domicilio[0].direccion
        )
          .replaceAll(cuilResponse.data.persona.domicilio[0].calle, '')
          .replaceAll(apiStreetNumber, '');
        apiPostalCode = JSON.stringify(
          cuilResponse.data.persona.domicilio[0].codigoPostal
        );
      })

      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setFormData({
          ...formData,
          firstName: apiFirstName.replaceAll('"', ''),
          middleNames: apiMiddleNames.replaceAll('"', ''),
          lastName: apiLastName.replaceAll('"', ''),
          cuil: apiCuil,
          province: apiProvince.replaceAll('"', ''),
          city: apiCity.replaceAll('"', ''),
          streetName: apiStreetName.replaceAll('"', ''),
          streetNumber: apiStreetNumber.replaceAll('"', ''),
          addressDetails: apiAddressDetails.replaceAll('"', '').substring(2),
          postalCode: apiPostalCode.replaceAll('"', ''),
        });
      });
  }

  useEffect(() => {
    if (formData.documentID !== '') {
      if (formData.documentType === 'DNI') {
        getDataFromDNI(formData.documentID);
      } else if (formData.documentType === 'CUIL') {
        getDataFromCUIL(formData.documentID);
      }
    }
  }, []);

  const checkData = () => {
    const userBirthDay = new Date(formData.dateOfBirth);
    const today = new Date();
    const minAge = new Date(today.setFullYear(today.getFullYear() - 18));
    const maxAge = new Date(today.setFullYear(today.getFullYear() - 100));

    if (formData.firstName.length < 3) {
      alert('Please enter a valid first name');
    } else if (formData.lastName.length < 2) {
      alert('Please enter a valid last name');
    } else if (isNaN(formData.cuil)) {
      alert('Please enter a valid CUIL');
    } else if (formData.cuil.length < 10 || formData.cuil.length > 11) {
      alert('Please enter a valid CUIL');
    } else if (formData.nationality.length < 4) {
      alert('Please enter a valid nationality');
    } else if (formData.birthCountry.length < 4) {
      alert('Please enter a valid birth country');
    } else if (userBirthDay === '') {
      alert('Please select a date');
    } else if (userBirthDay > minAge || userBirthDay < maxAge) {
      alert('Please select a valid date');
    } else {
      setReady((prevStatus) => !prevStatus);
    }
  };

  return (
    <>
      <Subtitle text='Personal Data' icon='fa-solid fa-person' />
      <TextInput
        type='text'
        label='First Name'
        value={formData.firstName}
        name='firstName'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <TextInput
        type='text'
        label='Middle Names'
        value={formData.middleNames}
        name='middleNames'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, middleNames: e.target.value });
        }}
      />
      <TextInput
        type='text'
        label='Last Name'
        value={formData.lastName}
        name='lastName'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <TextInput
        type='text'
        label='CUIL / CUIT'
        value={formData.cuil}
        name='cuil'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, cuil: e.target.value });
        }}
      />
      <TextInput
        type='text'
        label='Gender'
        value={formData.gender}
        name='gender'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, gender: e.target.value });
        }}
      />
      <TextInput
        type='text'
        label='Nationality'
        value={formData.nationality}
        name='nationality'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <TextInput
        type='text'
        label='Birth Country'
        value={formData.birthCountry}
        name='birthCountry'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, birthCountry: e.target.value });
        }}
      />
      <TextInput
        type='date'
        label='Date of Birth'
        value={formData.dateOfBirth}
        name='dateOfBirth'
        placeholder=''
        onChange={(e) => {
          setFormData({ ...formData, dateOfBirth: e.target.value });
        }}
        onBlur={checkData}
      />
      <div className='footer'>
        {ready === false ? (
          <Link to='/personal-data'>
            <button onClick={checkData} className='primary-button'>
              Next
            </button>
          </Link>
        ) : (
          <Link to='/address-data'>
            <button className='primary-button'>Next</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default PersonalData;
