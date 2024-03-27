const NameEmailPhone = ({userList, setSelectedContact}) => {
  return (
    <div>
      { ['Name','Email','Phone'].map((x) => {
        return (
          <div key={x}>
            <h3>{`${x} :`}</h3>
            <ul>{userList.map(user => <li 
                                        key={user.id}
                                        onClick={() =>{setSelectedContact(user)}}
                                      >{user[x.toLowerCase()]}</li>)}</ul>
          </div>
        );
      })}
    </div>
  );
};

export default NameEmailPhone;