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

export default NameEmailPhone;