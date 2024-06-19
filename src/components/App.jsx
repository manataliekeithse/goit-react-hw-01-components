import { Profile } from './Profile/Profile';
import user from '../json/user.json';
import data from '../json/data.json';

import { Statistics } from './Statistics/Statistics';

import friends from '../json/friends.json';
import { FriendList } from './FriendList/FriendList';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
