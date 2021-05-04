import axios from 'axios';
import React, { useState, useEffect } from 'react';

import UserCard from './UserCard';
import Spinner from './Spinner';

const ListCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUsers([...res.data]);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);
  return (
    <div className='row mt-4 py-4' style={{ backgroundColor: '#e3f2fd' }}>
      {loading ? (
        <Spinner />
      ) : users === undefined || error.length !== 0 ? (
        <p>Users not Found</p>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            website={user.website}
            id={user.id}
          />
        ))
      )}
    </div>
  );
};

export default ListCard;
