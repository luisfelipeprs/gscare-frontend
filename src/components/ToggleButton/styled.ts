import styled from 'styled-components';

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

export const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #2c3e50;
  transition: 0.3s;
  border-radius: 30px;

  &:before {
    position: absolute;
    content: '';
    height: 25px;
    width: 25px;
    left: 3px;
    bottom: 2.6px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.3s;
  }

  ${StyledInput}:checked + & {
    background-color: #00c853;
  }

  ${StyledInput}:checked + &:before {
    transform: translateX(29px);
  }
`;

export const StyledStrong = styled.strong`
  position: absolute;
  left: 100%;
  width: max-content;
  line-height: 30px;
  margin-left: 10px;
  cursor: pointer;
`;