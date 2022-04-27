import React from 'react';
import styled from 'styled-components';

const SelectInput = ({ options, value, name, label, onChange, icon }) => {
  return (
    <Input>
      {label ? <label for={name}>{label}</label> : ''}
      {icon ? (
        <select
          id={name}
          value={value}
          name={name}
          onChange={onChange}
          style={{ paddingLeft: '32px' }}
        >
          {options.map((option) => (
            <option key={option.toLowerCase()} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <select id={name} value={value} name={name} onChange={onChange}>
          {options.map((option) => (
            <option key={option.toLowerCase()} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      )}

      {icon ? <i className={icon}></i> : ''}
    </Input>
  );
};

export default SelectInput;

const Input = styled.div`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  select {
    width: 322px;
    font-size: 16px;
    padding: 8px 6px 6px 8px;
    border: 2px solid #d3dae0;
    border-radius: 4px;
    &::placeholder {
      color: #cad5de;
    }
    &:hover {
      border-color: #c5c5c5;
    }
    &:focus {
      outline: none;
      border: 2px solid #776bf7;
    }
  }

  label {
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    margin-top: -16px;
  }

  i {
    position: absolute;
    left: 12px;
    top: 10px;
    color: #cad5de;
  }
`;
