import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const UserListProfile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="user-container">
      <h1 className="main-header">Github User Cards</h1>
      <ul className="profile-main">
        {users.map(user => (
          <Link className="profile-name" to={`/${user.login}`} key={user.id}>
            <div className="profile-details" key={user.id}>
              <img
                className="profile-img"
                src={user.avatar_url}
                alt={user.login}
              />
              <div>
                <h2>{user.login[0].toUpperCase() + user.login.substring(1)}</h2>
                <h3>{user.location}</h3>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UserListProfile;
