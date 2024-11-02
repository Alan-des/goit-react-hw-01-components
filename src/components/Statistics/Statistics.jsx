import { List, ListItem, SectionWrapper, Title } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <SectionWrapper>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </ListItem>
        ))}
      </List>
    </SectionWrapper>
  );
};
