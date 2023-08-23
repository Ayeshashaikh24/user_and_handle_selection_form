import React, { useState } from 'react';
import UsersTab from './UserTab';
import BookmarkedUsersTab from './BookmarkedUsersTab';
import '../App.css'
function Tabs() {
  const [users, setUsers] = useState([]);
  const [bookmarkedUsers, setBookmarkedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('users');
  return (
    <div className="TabNavigation">
      <div className='userbtn'>
      <button onClick={() => setActiveTab('users')}>Users</button>
      <button onClick={() => setActiveTab('bookmarked')}>Bookmarked Users</button>
      </div>
     
      {activeTab === 'users' && (
      <UsersTab
        users={users}
        setUsers={setUsers}
        bookmarkedUsers={bookmarkedUsers}
        setBookmarkedUsers={setBookmarkedUsers}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      )}
      {activeTab === 'bookmarked' && (
        <BookmarkedUsersTab
          bookmarkedUsers={bookmarkedUsers}
          setBookmarkedUsers={setBookmarkedUsers}
        />
      )}
    </div>
  );
}

export default Tabs;
