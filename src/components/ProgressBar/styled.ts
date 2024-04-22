import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProgressText = styled.div<{ showText?: boolean }>`
  width: 100%;
  display: ${({ showText }) => (showText ? "flex" : "none")};
  justify-content: space-between;
  padding: 5px;
`;

export const ProgressBarInner = styled.div`
  width: 100%;
  height: 20px; /* ajuste conforme necessário */
  background-color: #E0E5EC; /* cor de fundo da barra de progresso */
  border-radius: 5px; /* borda arredondada */
  overflow: hidden; /* oculta o excesso de progresso */
  display: flex;
`;

interface IProgress {
  percentage: number;
  barColor: string;
}

export const Progress = styled.div<IProgress>`
  background-color: ${({ barColor }) => barColor}; /* cor da barra de progresso */
  width: ${({ percentage }) => percentage}%; /* largura baseada na porcentagem */
`;
