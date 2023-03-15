import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavButton = styled(LinkS)`
  color: ${({ color }) => color.textLight};
  border-bottom: 0px solid ${({ color }) => color.bgLight};
  padding: 5px 0 0 0;
  margin: 0px 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.1s ease-in-out;
  user-select: none;
  -webkit-user-select: none;

  &:hover {
    color: ${({ color }) => color.primary};
    border-bottom: 2px solid ${({ color }) => color.primary};
    padding: 5px 0;
  }

  &.active {
    color: ${({ color }) => color.primary};
    border-bottom: 2px solid ${({ color }) => color.primary};
    padding: 5px 0;
  }
`;
