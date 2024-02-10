// UserDetailsPage.js
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Spinner from "./Spinner";

const UserDetailsProfile = () => {
  const {username} = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setDetails(data));
  }, [username]);

  if (!details) return <Spinner />;

  return (
    <div className="details-container">
      <h1 className="details-heading">User profile information</h1>
      {details && (
        <div className="user-details">
          <div>Name: {details.name}</div>
          <div>Company: {details.company}</div>
          <div>Location: {details.location}</div>

          <div>Public repositories: {details.public_repos}</div>
          <div>No of Following: {details.following}</div>
          <div>Blog: {details.blog}</div>
        </div>
      )}
    </div>
  );
};

export default UserDetailsProfile;
