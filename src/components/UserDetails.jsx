import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Spinner from './shared/Spinner';
import Button from './shared/Button';
import PageNotFound from './shared/PageNotFound';

/* Component Logic */
const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const url = 'https://jsonplaceholder.typicode.com/users/';

  useEffect(() => {
    axios
      .get(`${url}${id}`)
      .then((res) => {
        setUser([res.data]);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [id]);

  return (
    <div className='container mt-5 py-5 bg-light'>
      {loading ? (
        <Spinner />
      ) : user === undefined || error.length !== 0 ? (
        <PageNotFound />
      ) : (
        user.map((usr) => (
          <Details key={usr.id} {...usr} {...usr.address} {...usr.company} />
        ))
      )}
    </div>
  );
};

/* Presentational Component */
const Details = ({
  name,
  username,
  email,
  address: { street, suite, city, zipcode, geo },
  phone,
  website,
  company,
}) => {
  return (
    <div className=''>
      <h1 className='text-center'>User Details</h1>
      <div className='px-5 shadow-lg pt-3 pb-3'>
        <h3>Contact</h3>
        <p className='ml-4'>
          Name: {name} <br />
          UserName: {username} <br />
          Email: {email} <br />
          Phone: {phone}
          Website: {website}
          <br />
        </p>
        <hr />
        <h3>Address</h3>
        <address className='ml-4'>
          street: {street} <br></br>
          Suite: {suite}
          <br></br>
          City: {city}
          <br></br>
          Zipcode: {zipcode}
          <br></br>
          Co-ordinates<br></br>
          <p className='ml-4'>
            latitude: {geo.lat}
            <br />
            langitude: {geo.lng}
          </p>
        </address>
        <hr />
        <h3>Company Details</h3>
        <p className='ml-4'>
          Company Name: {company.name}
          <br />
          Catch phrase: {company.catchPhrase}
          <br />
          slogan: {company.bs}
        </p>
      </div>
      <div className='mt-2' style={{ float: 'right' }}>
        <Button
          btnText={'Back'}
          path={'/'}
          cname={'btn btn-secondary btn-dark bg-light btn-lg'}
        />
      </div>
    </div>
  );
};

export default UserDetails;
