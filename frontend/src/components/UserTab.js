import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

function UsersTab({ users, setUsers, bookmarkedUsers, setBookmarkedUsers, searchQuery, setSearchQuery }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://api.github.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, [setUsers]);

  const handleBookmark = (user) => {
    const userIsBookmarked = bookmarkedUsers.some(bookmarkedUser => bookmarkedUser.id === user.id);

    if (userIsBookmarked) {
      setBookmarkedUsers(prevBookmarkedUsers =>
        prevBookmarkedUsers.filter(bookmarkedUser => bookmarkedUser.id !== user.id)
      );
    } else {
      setBookmarkedUsers(prevBookmarkedUsers => [...prevBookmarkedUsers, user]);
    }
  };

  const filteredUsers = users.filter(user =>
    user.login.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredUsers.map(user => (
        <UserCard
          key={user.id}
          user={user}
          bookmarkedUsers={bookmarkedUsers} // Pass bookmarkedUsers prop here
          setBookmarkedUsers={setBookmarkedUsers}
        />
      ))}
    </div>
  );
}

export default UsersTab;
