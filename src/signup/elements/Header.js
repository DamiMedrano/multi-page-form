import React from 'react';
import styled from 'styled-components';

const Header = ({ isSmall }) => {
  return (
    <StyledHeader className={isSmall ? 'small' : ''}>
      <Logo
        className={isSmall ? 'fa-brands fa-react small' : 'fa-brands fa-react'}
      ></Logo>
      Celeri
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 600;
  height: 200px;
  width: 100%;
  background: #fff;
  z-index: 2;
  font-size: 60px;
  position: fixed;
  top: 0;

  &.small {
    height: 72px;
    font-size: 28px;
    padding-bottom: 32px;
  }
`;

const Logo = styled.i`
  background-color: #2b2b2b;
  border-radius: 50%;
  margin-right: 8px;
  outline: 2px solid #2b2b2b;
  border: 2px solid #fafafa;
  color: #2c88d9;
  font-size: 100px;
  &.small {
    font-size: 40px;
  }
`;
