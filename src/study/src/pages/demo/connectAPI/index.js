import React, { useEffect, useState } from "react";
import axios from "axios";

import MasterLayout from "../../../themes/masterLayout";

const ConnectAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const persons = res.data;
        setUsers(persons);
        console.log(persons);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MasterLayout>
      <h1>Demo</h1>
      <ul>
        { users.map((person) => (
          <li key={person.id}>{person.name}</li>
          )
          )
        }
      </ul>
    </MasterLayout>
  );
};

export default ConnectAPI;
