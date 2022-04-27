import React from 'react';
import styled from 'styled-components';

const TextInput = ({
  type,
  value,
  name,
  label,
  placeholder,
  onChange,
  icon,
  isRequired,
}) => {
  return (
    <Input>
      {label ? <label for={name}>{label}</label> : ''}
      {icon ? (
        <input
          id={name}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          style={{ paddingLeft: '32px' }}
        />
      ) : (
        <input
          id={name}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}

      {icon ? <i className={icon}></i> : ''}
    </Input>
  );
};

export default TextInput;

const Input = styled.div`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  input {
    width: 280px;
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
