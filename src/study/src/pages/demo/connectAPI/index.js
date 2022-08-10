import React, { useEffect, useState } from "react";
import axios from "axios";

const ConnectAPI = () => {
  const [users, setUsers] = useState([]);
  const URI_API = "https://jsonplaceholder.typicode.com/users";
  const callAPI = async () => {
    try {
      const { data: users} = await axios({
        url: URI_API,
        method: 'GET'
      });
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <h1>List users</h1>
      <ul>
        { users?.map((person) => (
            <li key={person.id}>{person.name}</li>
            )
          )
        }
      </ul>
    </>
  );
};

export default ConnectAPI;
