import { GlobalStyle } from "GlobalStyle";
import user from "../user.json"
import data from '../data.json'
import friends from "../friends.json";
import transactions from '../transactions.json';
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionsHisthory } from "./TransactionsHisthory/TransactionsHisthory";


export const App = () => {
  return(  
  <>
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    /> 
    <Statistics title="Upload stats" stats={data}/>
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionsHisthory items={transactions} />
  <GlobalStyle/>
  </>
  )
  
};
