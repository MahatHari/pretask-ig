import React from 'react';
import { useParams } from 'react-router';
import Button from './Button';

function PageNotFound() {
  const { id } = useParams();
  return (
    <div className='container text-center'>
      <div className='jumbotron'>
        {id ? <h3>User does not Exist</h3> : <h3>Page not Found</h3>}

        <Button
          btnText={'Return to Homepage'}
          path={'/'}
          cname={'btn btn-primary btn-dark btn-lg bg-light'}
        />
      </div>
    </div>
  );
}

export default PageNotFound;
