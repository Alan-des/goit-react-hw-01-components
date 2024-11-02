import {
  AvatarItem,
  Avatars,
  Description,
  ItemQuantity,
  List,
  ListItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <Avatars src={avatar} alt="User avatar" />
      <Description>
        <AvatarItem className="name">{username}</AvatarItem>
        <AvatarItem className="tag">@{tag}</AvatarItem>
        <AvatarItem className="location">{location}</AvatarItem>
      </Description>

      <List>
        <ListItem>
          <span className="label">Followers</span>
          <ItemQuantity >{stats.followers}</ItemQuantity>
        </ListItem>
        <ListItem>
          <span className="label">Views</span>
          <ItemQuantity >{stats.views}</ItemQuantity>
        </ListItem>
        <ListItem>
          <span className="label">Likes</span>
          <span>{stats.likes}</span>
        </ListItem>
      </List>
    </div>
  );
};
