import styled from 'styled-components';

export const HeadRow = styled.tr`
  background-color: ${p => p.theme.colors.green}
`;

export const BodyRow = styled.tr`
  :nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px auto;
`;

export const TableHead = styled.th`
padding: 16px;
border: 1px solid #ddd;
`;

export const TableBody = styled.td`
padding: 16px; 
  text-align: center; 
  `;
