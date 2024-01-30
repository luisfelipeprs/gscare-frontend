import { ReactNode, ComponentType, ReactElement } from "react";
import { House } from "phosphor-react";
import {
  ContainerBlueBar,
  ContainerSectionsInfos,
  ContentBlueBar,
  StyledDateContainer,
  StyledNameContainer,
} from "./styled";

interface RouterIndicatorProps {
  onButtonClick?: ComponentType<unknown>; // Agora é opcional
  children: ReactNode;
  descText: string;
  routerText: string;
}

export function RouterIndicator({
  onButtonClick: ButtonComponent,
  children,
  descText,
  routerText,
}: RouterIndicatorProps): ReactElement {
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
            {ButtonComponent && <ButtonComponent />} {/* Renderiza apenas se ButtonComponent existir */}
          </StyledDateContainer>
        </ContentBlueBar>
      </ContainerBlueBar>
      <ContainerSectionsInfos>{children}</ContainerSectionsInfos>
    </>
  );
}
