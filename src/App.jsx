import './App.css';
import {useEffect, useState} from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/'

const NameEmailPhone = ({userList}) => {
  return (
    <>
      { ['Name','Email','Phone'].map((x) => {
        return (
          <div key={x}>
            <h3>{`${x} :`}</h3>
            <ul>{userList.map(user => <li key={user.id}>{user[x.toLowerCase()]}</li>)}</ul>
          </div>
        );
      })}
    </>
  );
};

const App = () => {

  const [userList, setUserList] = useState([]);

  useEffect(()=>{
    const getUsers = async () => {
      const response = await fetch(API_URL + 'users');
      console.log(response);
      const json = await response.json();
      console.log(json);
      console.log(userList);
      setUserList(json)
    };
    getUsers();
  }, [],
  );

  console.log(userList);

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
