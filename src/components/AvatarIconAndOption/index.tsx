import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Avatar, Flex } from "@radix-ui/themes";
import { DropdownMenuContent, DropdownMenuItem, IconButton, RightSlot } from "./styled";
import { SignOut, Gear, User } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";

// import './styles.css';

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
          </Flex>
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenuItem className="DropdownMenuItem" onClick={goToProfile}>
            profile
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
            logout
            <RightSlot>
              <SignOut size={16} />
            </RightSlot>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
