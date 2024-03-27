import './App.css';
import {useEffect, useState} from 'react';
import NameEmailPhone from './NameEmailPhone';

const API_URL = 'https://jsonplaceholder.typicode.com/'

const getUsers = async (setUserList) => {
  try {
    const response = await fetch(API_URL + 'users');
    const json = await response.json();
    setUserList(json);
  } catch (err) {
    console.log("Error!", err);
  };
};

const App = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {getUsers(setUserList)}, []);
  return (
    <>
      <h1>Contact List</h1>
      <NameEmailPhone userList={userList}/>
    </>
  );
};

export default App;