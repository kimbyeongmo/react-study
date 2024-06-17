import React, { Fragment, useState } from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';


const App = () => {

  // 회원들이 저장될 배열
  const [userList, setUserList] = useState([]);

  const addUserHandler = user => {

    console.log(user);
    setUserList(prev => [
      ...prev, 
      {
        ...user, 
        id: Math.random().toString()
      }
    ]);
  };

  return (
    <>
      <AddUsers onAdd={addUserHandler} />
      <UserList user={userList} />
    </>
  );
};

export default App;
