import './App.css';
import {useEffect, useState} from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/'

const Names = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Name</h3>
      <ul>
        {
          props.userList.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })
        }
      </ul>
    </div>
  );
};

const Email = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Email</h3>
      <ul>
        {
          props.userList.map((user) => {
            return <li key={user.id}>{user.email}</li>
          })
        }
      </ul>
    </div>
  );
};

const Phone = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Phone</h3>
      <ul>
        {
          props.userList.map((user) => {
            return <li key={user.id}>{user.phone}</li>
          })
        }
      </ul>
    </div>
  );
};

const App = () => {

  const [userList, setUserList] = useState([]);

  useEffect(()=>{
    const getUsers = async () => {
      const response = await fetch(API_URL + 'users');
      const json = await response.json();
      // console.log(json);
      setUserList(json);
    };
    getUsers();
  }, [],
  );

  console.log(userList);

  return (
    <>
      <h1>Contact List</h1>
      <div>
        <Names userList={userList}/>
        <Email userList={userList}/>
        <Phone userList={userList}/>
      </div>
    </>
  );
};

export default App;
