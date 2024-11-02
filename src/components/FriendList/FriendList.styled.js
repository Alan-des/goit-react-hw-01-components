import styled from 'styled-components';

export const StatusFriend = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${p => (p.$isOnline ? 'green' : 'red')};
`;

export const ListItem = styled.li`
  display: flex;
    align-items: center;
    gap: 10px;
    border: 1px, solid, black;
    border-radius: 7%;
    margin: auto;
    margin-top: 5px;
    width: 150px;
    padding: 8px;
`;
