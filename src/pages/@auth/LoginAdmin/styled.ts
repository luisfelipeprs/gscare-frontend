import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1E2C50;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Content = styled.main`
  background-color: #fff;
  text-align: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  gap: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    margin: 20px 10px;
    padding: 15px;
  }
  
  .inputContainer {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    margin-bottom: 12px;

    label {
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      height: 48px;
      border: 1px solid #5C73DB;
      border-radius: 12px;
      padding: 12px;
      box-sizing: border-box;
    }
  }

  .button {
    width: 100%;
    height: 48px;
    background: #1E2C50;
    border-radius: 12px;
    color: #fff;
    border: none;
    font-size: 18px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    p {
      font-weight: 400;
      font-size: 16px;
      color: #67757f;
    }
    a {
      font-weight: 400;
      font-size: 16px;
      color: #007fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
`;

export const HeaderForm = styled.div`
  height: 20px;

  button {
    display: flex;
    gap: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
      margin: auto;
    }
  }
`;
