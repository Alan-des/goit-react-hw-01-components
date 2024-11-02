import { BodyRow, HeadRow, Table, TableBody, TableHead } from "./TransactionsHisthory.styled";

export const TransactionsHisthory = ({items} ) => {
  return (
    <Table>
      <thead>
        <HeadRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </HeadRow>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <BodyRow key={id}>
            <TableBody>{type}</TableBody>
            <TableBody>{amount}</TableBody>
            <TableBody>{currency}</TableBody>
          </BodyRow>
        ))}
      </tbody>
    </Table>
  );
};
