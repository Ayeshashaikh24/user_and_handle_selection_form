import React from 'react';

function UserCard({ user, bookmarkedUsers, setBookmarkedUsers }) {
  const isBookmarked = bookmarkedUsers.some(bookmarkedUser => bookmarkedUser.id === user.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarkedUsers(prevBookmarkedUsers =>
        prevBookmarkedUsers.filter(bookmarkedUser => bookmarkedUser.id !== user.id)
      );
    } else {
      setBookmarkedUsers(prevBookmarkedUsers => [...prevBookmarkedUsers, user]);
    }
  };

  return (
    <div className='card'>
    <div className="UserCard">
      <img src={user.avatar_url} alt={`${user.login} avatar`} />
      <h3>{user.login}</h3>
      <button onClick={toggleBookmark}>
        {isBookmarked ? 'Unbookmark' : 'Bookmark'}
      </button>
    </div>
    </div>
  );
}

export default UserCard;
