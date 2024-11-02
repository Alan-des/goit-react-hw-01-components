import { ListItem, StatusFriend } from "./FriendList.styled"

export const FriendList = ({friends}) => {
    return (
<ul className="friend-list">
 {friends.map(({id, avatar,name,isOnline})=> 
    <ListItem key={id}>
  <StatusFriend $isOnline={isOnline}/>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</ListItem>
)}
</ul>
    )
}