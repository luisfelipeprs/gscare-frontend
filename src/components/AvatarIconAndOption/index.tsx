import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Avatar, Flex } from "@radix-ui/themes";
import { DropdownMenuContent, DropdownMenuItem, IconButton, RightSlot } from "./styled";
import { CaretDown, SignOut, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import './styles.css';

const ArrowBottom = styled.div`
    width: 15px;
    height: 15px;
    background-color: #D9E2F4;
    position: absolute;
    bottom: -2px;
    right: -2px;
    justify-content: center;
    display: flex;
    text-align: center;
    margin: auto;
    border-radius: 50%;
    box-shadow: 0 1px 10px #686d7657;

    svg {
      margin: auto;
      color: #868686;
    }
    
    &:hover {
      box-shadow: 0 1px 8px #0000003f;
    }
`;

export function AvatarIconAndOption () {

  const navigate = useNavigate();

  function handleSubmitData () {
    navigate('/')
  }

  function goToProfile () {
    navigate('/admin/profile')
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <IconButton aria-label="Customise options">
          <Flex gap="2">
            {/* <Avatar src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" fallback="A" /> */}
            <Avatar fallback="F" radius="full" size="3" />
            <ArrowBottom>
              <CaretDown size={10} />
            </ArrowBottom>
          </Flex>
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenuItem className="DropdownMenuItem" onClick={goToProfile}>
            Profile
            <RightSlot>
              <User size={16} />
            </RightSlot>
          </DropdownMenuItem>
          {/* <DropdownMenuItem className="DropdownMenuItem">
            config
            <RightSlot>
              <Gear size={16} />
            </RightSlot>
          </DropdownMenuItem> */}
          <DropdownMenuItem className="DropdownMenuItem" onClick={handleSubmitData}>
            Logout
            <RightSlot>
              <SignOut size={16} />
            </RightSlot>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
