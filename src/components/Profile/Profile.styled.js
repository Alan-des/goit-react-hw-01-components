import styled from 'styled-components';
export const Avatars = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: auto;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: ${p => p.theme.colors.bisque};
  border-radius: 36%;
  border: 1px, solid, ${p => p.theme.colors.black};
`;
export const AvatarItem = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ItemQuantity = styled.span`
  font-weight: 600;
`;
