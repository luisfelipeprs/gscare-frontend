import { ReactNode, ComponentType } from "react";
import { House } from "phosphor-react";
import {
  // ButtonPlus,
  ContainerBlueBar,
  ContainerSectionsInfos,
  ContentBlueBar,
  StyledDateContainer,
  StyledNameContainer,
} from "./styled";

interface RouterIndicatorProps {
  onButtonClick: ComponentType<unknown>; // Change here to accept a React component
  // buttonText: string;
  children: ReactNode;
  descText: string;
  routerText: string;
}

export function RouterIndicator({
  onButtonClick: ButtonComponent,
  // buttonText,
  children,
  descText,
  routerText,
}: RouterIndicatorProps) {
  return (
    <>
      <ContainerBlueBar>
        <ContentBlueBar>
          <StyledNameContainer>
            <div>
              <House size={30} />
              <p>Dashboard / {routerText}</p>
            </div>
            <p className="info-text">{descText}</p>
          </StyledNameContainer>
          <StyledDateContainer>
            {/* <ButtonPlus> */}
            <ButtonComponent /> {/* Render the passed component here */}
            {/* <Plus size={19} weight="bold" /> */}
            {/* </ButtonPlus> */}
          </StyledDateContainer>
        </ContentBlueBar>
      </ContainerBlueBar>
      <ContainerSectionsInfos>{children}</ContainerSectionsInfos>
    </>
  );
}