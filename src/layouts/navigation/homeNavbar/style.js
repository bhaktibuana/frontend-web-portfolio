import styled from "styled-components";

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 65px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 10%;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.3);
`;

export const LeftContent = styled.div`
  height: 100%;
  width: 50px;
  background-color: red;
`;

export const RightContent = styled.div``;
