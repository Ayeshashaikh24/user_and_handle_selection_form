import React from 'react';
import UserCard from './UserCard';

function BookmarkedUsersTab({ bookmarkedUsers, setBookmarkedUsers }) {
  return (
    <div className='BookmarkedUserCard'>
      {bookmarkedUsers.map(user => (
        <UserCard
          key={user.id}
          user={user}
          bookmarkedUsers={bookmarkedUsers}
          setBookmarkedUsers={setBookmarkedUsers}
        />
      ))}
    </div>
  );
}

export default BookmarkedUsersTab;
