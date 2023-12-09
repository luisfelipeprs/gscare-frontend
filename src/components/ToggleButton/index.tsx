import { useState } from "react";
import { StyledInput, StyledLabel, StyledSpan} from "./styled";

const Toggle = (toggled: any) => {
  const [isToggled] = useState(toggled);

  return (
    <StyledLabel>
      <StyledInput type="checkbox" defaultChecked={isToggled}/>
      <StyledSpan />
    </StyledLabel>
  );
};

export default Toggle;