import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  /* margin-left: 10px; */
`;

export const FilterSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  /* margin-left: 10px; */
`;

export const FilterButton = styled.button`

  text-align: center;
  justify-content: center;
  display: flex;
  font-weight: bold;
  font-family: sans-serif;
  padding: 10px 10px;
  font-size: 16px;
  background-color: #fff;
  color: #696969;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    color: #5c5c5c;
  }
`;

export const Pagination = styled.div`
  text-align: right;
`;


export const PaginationButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CurrentPageDiv = styled.span`
  margin: 0 10px;
`;
