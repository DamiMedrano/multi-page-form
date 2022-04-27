import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetStarted from './routes/GetStarted';
import InitialData from './routes/InitialData';
import PersonalData from './routes/PersonalData';
import data from './data';
import NotFound from './routes/NotFound';
import styled from 'styled-components';
import AddressData from './routes/AddressData';
import LegalQuestions from './routes/LegalQuestions';
import BankData from './routes/BankData';
import MediaUpload from './routes/media/MediaUpload';
import Header from './elements/Header';

const Signup = () => {
  const [formData, setFormData] = useState(getFormData);

  function getFormData() {
    const storedFormData = localStorage.getItem('form');
    if (!storedFormData) {
      return data;
    } else {
      return JSON.parse(storedFormData);
    }
  }
  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(formData));
  }, [formData]);

  return (
    <>
      <Header />
      <Content>
        <BrowserRouter>
          <Routes>
            <Route
              path='*'
              element={
                <NotFound formData={formData} setFormData={setFormData} />
              }
            />
            <Route
              path='/'
              element={
                <GetStarted formData={formData} setFormData={setFormData} />
              }
            />
            <Route
              path='/initial-data'
              element={
                <InitialData formData={formData} setFormData={setFormData} />
              }
            />
            <Route
              path='/personal-data'
              element={
                <PersonalData formData={formData} setFormData={setFormData} />
              }
            />
            <Route
              path='/address-data'
              element={
                <AddressData formData={formData} setFormData={setFormData} />
              }
            />
            <Route
              path='/legal-questions'
              element={
                <LegalQuestions formData={formData} setFormData={setFormData} />
              }
            />
            <Route
              path='/bank-data'
              element={
                <BankData formData={formData} setFormData={setFormData} />
              }
            />
            <Route
              path='/media-upload'
              element={
                <MediaUpload formData={formData} setFormData={setFormData} />
              }
            />
          </Routes>
        </BrowserRouter>
      </Content>
    </>
  );
};

export default Signup;

const Content = styled.div`
  margin: 240px 0 180px;
`;
