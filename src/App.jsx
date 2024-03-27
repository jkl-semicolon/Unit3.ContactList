import './App.css';
import {useEffect, useState} from 'react';
import NameEmailPhone from './NameEmailPhone';

const API_URL = 'https://jsonplaceholder.typicode.com/'

const getUsers = async (setUserList) => {
  try {
    const response = await fetch(API_URL + 'users');
    const json = await response.json();
    setUserList(json);
    console.log(json);
  } catch (err) {
    console.log("Error!", err);
  };
};

const SelectedContact = ({selectedContact, setSelectedContact}) => {
  if (selectedContact) {
    return (
      <div>
        <div>
          <h2>{selectedContact.name}</h2>
          <h4>{selectedContact.company.name}</h4>
          <h4>{selectedContact.company.catchPhrase}</h4>
          <h4>{selectedContact.company.bs}</h4>
          <h3>{selectedContact.email}</h3>
          <h3>{selectedContact.website}</h3>
          <h3>{selectedContact.phone}</h3>
          <h3>{selectedContact.username}</h3>
        </div>
        <button onClick={()=>{setSelectedContact(null)}}>Go Back</button>
      </div>
    );
  }
};

const App = () => {
  const [userList, setUserList] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  useEffect(() => {getUsers(setUserList)}, []);
  if (selectedContact) {
    return (
      <>
        <h1>Contact List</h1>
        <SelectedContact selectedContact={selectedContact} setSelectedContact={setSelectedContact}/>
      </>
    );
  } else {
    return (
      <>
        <h1>Contact List</h1>
        <NameEmailPhone userList={userList} setSelectedContact={setSelectedContact}/>
      </>
    );
  } 
};

export default App;