import Profile from './_Profile/Profile';
import user from './_Profile/user.json';

import Statistics from './_Statistics/Statistics';
import data from './_Statistics/data.json';

import FriendList from './_FriendList/FriendList';
import friends from './_FriendList/friends.json';

import TransactionHistory from './_TransactionHistory/TransactionHistory';
import transaction from './_TransactionHistory/transaction.json';

export const App = () => {
  return (
    <div
      style={{
        margin: '50px auto',
        width: '2300px',
        height: 'auto',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        // flexDirection: 'column',
        backgroundColor: 'lightblue',
      }}
    >
      <div>
        <h2 style={{ marginTop: '820px' }}>Sebastian Adamoszek </h2>
        <h4>task: goit-react-hw-01-components</h4>
      </div>

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <FriendList friendList={friends} />
      <TransactionHistory data={transaction} />
    </div>
  );
};
