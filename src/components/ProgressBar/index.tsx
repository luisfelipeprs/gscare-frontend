import { Progress, ProgressBarContainer, ProgressBarInner, ProgressText } from "./styled";

interface IProps {
  percentage: number;
  name: string;
  showText?: boolean;
  barColor?: string;
}

export const ProgressBar = ({ percentage, name, showText = true, barColor = "#1F2C53" }: IProps) => {

  return (
    <ProgressBarContainer>
      <ProgressText showText={showText}>
        {showText && (
          <>
            <div>{name}</div>
            <div>{percentage}%</div>
          </>
        )}
      </ProgressText>
      <ProgressBarInner>
        <Progress percentage={percentage} barColor={barColor} />
      </ProgressBarInner>
    </ProgressBarContainer>
  );
};
