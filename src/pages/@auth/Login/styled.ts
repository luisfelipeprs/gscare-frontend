import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4959B9;
  overflow: auto;
  min-height: 100vh;
`
export const Content = styled.main`  
  background-color: #fff;
  text-align: center;
  min-width: 300px;
  max-width: 385px;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;

  @media (max-width: 400px) {
    margin: 20px 10px;
  }

  .btn-top-left {
    position: absolute; 
    top: 8px; 
    left: 3px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .header {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    p {
      font-weight: bold;
      color: #000;
      text-align: start;
      font-size: 20px;
      line-height: 24px;
      padding-top: 15px;
    }
  }

    form {
    display: flex;
    align-items: center;
    flex-direction: column;

    .inputContainer {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      label {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 8px;
      }
      input {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          /* padding: 16px; */
          width: 100%;
          height: 49px;
          border: 1px solid #5C73DB;
          border-radius: 12px;
          margin-bottom: 12px;
          padding: 15px;
        }
    }
    a {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      padding-top: 8px;
      padding-bottom: 8px;
      color: #5C73DB;
    }
    .button {
      width: 100%;
      height: 48px;
      background: #4763E4;
      border-radius: 12px;
      color: #fff;
      border: none;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      margin: 20px 0px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
    }
    .button:hover {
      cursor: pointer;
      opacity: 0.8;
    }
    .footer {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-evenly;
      gap: 10px;
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #67757f;
      }
      a {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-decoration-line: underline;
        color: #007fff;
        text-decoration: none;
      }
    }
  }
`;




// import styled from "styled-components";

// export const Container = styled.main`
//   width: 100vw;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;

//   .header {
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   margin-bottom: 40px;
// }

//   .header span {
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 24px;
//   padding-top: 15px;
// }

//   form {
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//   }

//   form  .inputContainer {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//   }

//   form  .inputContainer label {
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 19px;
//     margin-bottom: 8px;
//   }

// .container form  .inputContainer input {
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 16px;
//   width: 520px;
//   height: 49px;
//   border: 1px solid #5C73DB;
//   border-radius: 12px;
//   margin-bottom: 12px;

// }

// .container form a {
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 19px;
//   padding-top: 16px;
//   padding-bottom: 16px;
//   color: #5C73DB;
// }

// .container form .button {
//   width: 520px;
//   height: 48px;
//   background: #4763E4;
//   border-radius: 12px;
//   color: #fff;
//   border: none;
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 22px;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 15px;
// }
// .container form .button:hover {
//   cursor: pointer;
//   opacity: 0.8;
// }

// .container form .footer {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px
// }

// .container form .footer p {
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 19px;
//   color: #000000;
// }

// .container form .footer a {
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 19px;
//   text-decoration-line: underline;
//   color: #5C73DB;
// }
// `;
