import React from 'react';
import './App.css';
import DelayedToggle from './DelayedToggle';
import UserProfile from './UserProfile';

function App() {
  return (
    <>
    <DelayedToggle/>
    <UserProfile id={1}/>
    </>
  );
}

export default App;
