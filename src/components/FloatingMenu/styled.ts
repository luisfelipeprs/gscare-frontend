import styled from 'styled-components';

export const StyledFloatingMenu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  background-color: #333;
  color: #fff;
  border: 1px solid #666;
  border-radius: 5px;
`;

export const Img = styled.img`
  width: 50px;
  border: 1px solid black;
  border-radius: 40px;
  margin: 10px;
`
export const Infos = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  
  p{
    display: flex;
    font-size: 14px;
    margin: 3px;    
  }
`

export const SignOutInfo = styled.div`
  margin: 15px;
`
export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const SidebarMenu = styled.div`
  margin-bottom: 20px;
`


