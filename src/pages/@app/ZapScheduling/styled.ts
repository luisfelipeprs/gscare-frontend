import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 3% 5%;
`;

export const Content = styled.div``;

export const ProfileInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const InfoName = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  p {
    font-size: 1.5rem;
  }
`;

export const LeftContainer = styled.div`
  padding: 60px 20px;
  width: 100%;
  border: 1px solid black;
  border-radius: 20px;
  margin-right: 0px;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const MidContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 20px;
`;

export const Support = styled.div`
  padding: 30px 20px;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Interest = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  p {
    color: #a0a0a0;
  }
`;

export const ShowInterest = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
`;

export const AgroupInterest = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  height: 100%; /* Set the height to 100% */
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border: 1px solid black;
  height: 20%;
  border-radius: 20px;
  padding: 20px;
  margin-top: 30px;
  @media screen and (max-width: 1000px) {
    margin-top: 50px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 10px;
  border: 1px solid black;
  height: 20%;
  border-radius: 20px;
  padding: 5px;
  align-items: center;
  margin-top: 20px;
  svg {
    width: 30px;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 50px;
  }
`;

export const Received = styled.div`
  display: flex;
  margin-left: 200px;
  align-items: center;
`;


export const TableContainer = styled.div`
  overflow: hidden;
  overflow-x: auto;
  max-width: 100%;
  margin: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #007bff;
    color: #fff;
  }

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #ddd;
  }
`;

export const TableCell = styled.td`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;