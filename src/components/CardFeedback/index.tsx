import { Avatar, Box, Card, Flex, Strong, Text } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { ContentHeader, MessageResponse,Feedback } from './styled';
import ModalFeedback from '../ModalFeedback';


function CardFeedback(){
  return (

    <Feedback>
    <Flex gap="3" wrap="wrap">
      <Card style={{ maxWidth: 500 }}>
        <ContentHeader>
          <div>
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
            />
          <Box>

            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              Engineering
            </Text>
          </Box>
            </div>
          <Text as="div" size="1" color="gray">
              11/09/2001 as 22:00
            </Text>
        </ContentHeader>
        <br />
        <Text as="p" size="3">
          <Strong>Typography</Strong> is the art and technique of arranging type to
          make written language legible, readable and appealing when displayed.
        </Text>
        <br />
        <MessageResponse>
          <span>
            Mensagem
          </span>
          <ModalFeedback/>
        </MessageResponse>
      </Card>
    </Flex>
  </Feedback>
  );
}

export default CardFeedback;