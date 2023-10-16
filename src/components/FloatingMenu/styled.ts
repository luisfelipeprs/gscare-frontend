import styled from 'styled-components';

export const StyledFloatingMenu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px;
  width: 100%;
  height: 100%;
  margin: 10px;
  background-color: #333;
  color: #fff;
  border: 1px solid #666;
  border-radius: 5px;
`;

export const Img = styled.img`
  width: 60px;
  border: 1px solid black;
  border-radius: 40px;
  margin: 10px 10px;
  margin-left: 10px;
`
export const Infos = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  
  p{
    display: flex;
    
    margin: 5px;
    flex: 2;
    
  }
`

export const SignOutInfo = styled.div`
  margin: 20px;
`
export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`


