import React from 'react';
import Button from './shared/Button';

const UserCard = ({ id, name, username, website, handleClick }) => {
  return (
    <div
      className='card ml-auto mr-auto mt-2 shadow-lg'
      style={{ width: '20rem', textAlign: 'center', marginLeft: '1rem' }}
    >
      <span
        className='card-img-top mt-2 shadow-sm'
        style={{
          width: '8rem',
          height: '8rem',
          borderRadius: '4rem',
          backgroundColor: '#e3f2fd',
          textAlign: 'center',
          margin: 'auto',
          paddingTop: '3rem',
        }}
      >
        {name.indexOf('.') !== -1
          ? name.substr(name.indexOf('.') + 2, 1)
          : name.substr(0, 1)}
        {name.indexOf('.') !== -1
          ? name.substr(name.lastIndexOf(' ') + 1, 1)
          : name.substr(name.indexOf(' ') + 1, 1)}
      </span>
      <div className='card-body'>
        <h3 className='card-title'>{name}</h3>
        <p className='card-text'>@{username}</p>
        <p>
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a href='#'>{website}</a>
        </p>
        <Button
          btnText={'More Info'}
          path={`/user/${id}`}
          handleClick={handleClick}
          cname={'btn btn-primary bg-light btn-lg'}
        />
      </div>
    </div>
  );
};

export default UserCard;
