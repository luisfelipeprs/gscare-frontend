import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`
export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 10px;
  @media screen and (max-width: 1000px) {
    margin: 0px;
  }
`