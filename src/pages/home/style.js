import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
`;

export const Section = styled.section`
  width: 100%;
  height: 800px;
  background-color: ${({ color }) => color};
`;
