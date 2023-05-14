import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: auto;
  min-height: 800px;
  background-color: ${({ color }) => color.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
