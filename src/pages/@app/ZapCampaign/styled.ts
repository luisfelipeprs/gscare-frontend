import styled from "styled-components";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Separator,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  padding: 20px;
`;

export const ProfileContainerAndButtonSubmit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  /* height: 400px; */
  /* padding: 20px; */
  width: 100%;
  flex: 1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const RightContainer = styled.div`
  /* height: 400px; */
  /* padding: 20px; */
  width: 100%;
  flex: 1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftContent = styled.div`
  height: 600px;
  background-color: #ffffff50;
  padding: 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoName = styled.div`
  p {
    font-size: 1.5rem;
    color: #3d4265;
  }
`;

export const ModalButton = styled(Button)`
  background-color: #FFA50090;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  font-family: monospace;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
    background-color: #FFA500;
  }
`;

export const StatusIconsContainer = styled(Flex)`
  gap: 3;

  svg {
    width: 10px;
    fill: ${({ color }) => color || 'black'};
  }
`;

export const StartCampaignButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  padding: 20px;
  background-color: #FFA500;
  color: #fff;
  border-radius: 8px;
  font-weight: bold;
`;

export const CampaignTitle = styled(Text)`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CampaignTextField = styled(TextField.Input)`
  width: 100%;
`;

export const CampaignTextArea = styled(TextArea)`
  width: 100%;
`;

export const CampaignSubtitle = styled(CampaignTitle)`
  margin-top: 20px;
`;

export const CampaignInfoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const CampaignTextInfo = styled(Text)`
  font-size: 1rem;
`;

export const CampaignTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CampaignContactAvatar = styled(Avatar)`
  size: 4;
  /* radius: full; */
`;

export const CampaignContactModal = styled(ModalButton)`
  margin-top: 20px;
`;

export const CampaignFollowUpTitle = styled(CampaignTitle)`
  margin-top: 20px;
`;

export const CampaignFollowUpContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CampaignFollowUpButton = styled(ModalButton)`
  margin-top: 10px;
`;

export const CampaignFollowUpFlex = styled(Flex)`
  margin-top: 10px;
`;

export const CampaignFollowUpSeparator = styled(Separator)`
  margin: 0 10px;
`;

export const CampaignFollowUpText = styled(Text)`
  margin-left: 10px;
  margin-top: 3px;
`;

export const CampaignFollowUpInfoBox = styled(Box)`
  margin-top: 10px;
`;

export const CampaignFollowUpTextInfo = styled(CampaignTextInfo)`
  margin-top: 3px;
`;

export const CampaignFollowUpAvatar = styled(Avatar)`
  margin-top: 10px;
`;

export const CampaignFollowUpBox = styled(Box)`
  margin-top: 10px;
`;

export const CampaignFollowUpTextBold = styled(Text)`
  font-weight: bold;
`;

export const CampaignFollowUpTextGray = styled(CampaignTextInfo)`
  color: gray;
`;

export const CampaignFollowUpReceivedText = styled(CampaignTextInfo)`
  margin-left: 5px;
`;

export const CampaignFollowUpDetailsContainer = styled(ProfileInfoContainer)`
  margin-top: 20px;
`;

export const CampaignFollowUpDetailsAvatar = styled(Avatar)`
  size: 3;
  /* radius: full; */
`;

export const CampaignFollowUpDetailsBox = styled(Box)`
  margin-left: 10px;
`;

export const CampaignFollowUpDetailsText = styled(Text)`
  font-size: 1rem;
`;

export const CampaignFollowUpDetailsSeparator = styled(Separator)`
  margin: 0 10px;
`;

export const CampaignFollowUpDetailsReceivedText = styled(CampaignTextInfo)`
  margin-left: 5px;
`;




// -----------


export const MidContainer = styled.div`
  height: 100%;
  /* padding: 20px; */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const AvatarContainer = styled.div`
display: flex;
  flex-direction: row;
  gap: 10px;

  width: 100%; /* Ou uma largura específica */
  white-space: nowrap; /* Evita que o conteúdo quebre para a próxima linha */
  overflow-x: auto; /* Adiciona uma barra de rolagem horizontal quando necessário */
  padding: 10px;

  display: flex;
  gap: 10px;
  background-color: #ffffff50;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  margin-top: 20px;
`;

export const Support = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff50;
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
`;

export const ScrollHorizontal = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
width: 100%;
white-space: nowrap;
overflow-x: auto;
padding: 10px;
`;

export const Received = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const ScrollInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  white-space: nowrap;
  overflow-y: auto;
  padding: 10px;
  height: 300px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 10px;
  background-color: #ffffff50;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  margin-top: 20px;
  svg {
    width: 30px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const TextStatus = styled(Text)`
  margin-left: 10px;
  font-weight: bold;
`;

export const SeparatorVertical = styled(Separator)`
  height: 20px;
  margin: 0 10px;
`;
