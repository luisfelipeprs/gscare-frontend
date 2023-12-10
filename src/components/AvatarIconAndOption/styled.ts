// DropdownMenuStyles.js
import styled, { keyframes } from 'styled-components';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";


export const AvatarIconContainer = styled.div`
  display: flex;
  gap: 2px;
`;

// Keyframes
export const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

// Styled Components
export const DropdownMenuContent = styled(DropdownMenu.Content)`
  margin: 10px;
  min-width: 220px;
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  color: #5e9bf7;
  div{ svg{ color: #5e9bf7; } }
  font-size: 0.9rem;
  line-height: 1;
  /* color: var(--violet-11); */
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 20px;
  position: relative;
  /* padding-left: 25px; */
  user-select: none;
  outline: none;
  font-family: monospace;

  &:hover {
    background-color: #f8f8f8;
    border-radius: 8px;
    color: #4189f5;
    div{ svg{ color: #4189f5; } }
  }
`;

export const RightSlot = styled.div`
  margin-left: auto;
  padding-left: 20px;
  color: var(--mauve-11);
`;

export const IconButton = styled.button`
  font-family: inherit;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--violet-11);
  background-color: white;
  box-shadow: 0 2px 10px var(--black-a7);
  &:hover {
    background-color: var(--violet-3);
  }
  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`;
