import React, { Fragment, useState } from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';


const App = () => {

  return (
    <>
     <AddUsers /> 
     <UserList />
    </>
  );
};

export default App;
