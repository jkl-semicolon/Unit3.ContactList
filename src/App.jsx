import './App.css';
import {useEffect, useState} from 'react';
import NameEmailPhone from './NameEmailPhone';

const API_URL = 'https://jsonplaceholder.typicode.com/'

const App = () => {
  const [userList, setUserList] = useState([]);
  useEffect(()=>{
    const getUsers = async () => {
      const response = await fetch(API_URL + 'users');
      const json = await response.json();
      setUserList(json)
    };
    getUsers();
  }, [],
  );
  return (
    <>
      <h1>Contact List</h1>
      <div>
        <NameEmailPhone userList={userList}/>
      </div>
    </>
  );
};

export default App;