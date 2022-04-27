import React from 'react';
import styled from 'styled-components';

const Subtitle = (props) => {
  return (
    <StyledSubtitle>
      <Icon className={props.icon}></Icon>
      <h4>{props.text}</h4>
    </StyledSubtitle>
  );
};

export default Subtitle;

const StyledSubtitle = styled.h3`
  position: absolute;
  top: 200px;
  display: flex;
  height: 32px;
  min-height: 32px;

  padding: 0px 8px 4px;
  height: 40px;
`;

const Icon = styled.i`
  color: #2c88d9;
  padding: 0px 8px 4px 0px;
`;
