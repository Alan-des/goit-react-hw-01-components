import styled from "styled-components";

export const SectionWrapper = styled.section`
    width: 550px;
    margin: auto;
`
export const Title = styled.h2`
  text-align: center;
  color: #62676b;
`;
export const List = styled.ul`
  display: flex;
`;
export const ListItem = styled.li`
  padding: 20px;
  background-color: ${p => p.theme.getRandomColor};
`;