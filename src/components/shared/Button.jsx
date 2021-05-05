import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ btnText, path, cname, handleClick }) => {
  return (
    <button className={cname} onClick={handleClick}>
      <Link to={path}>{btnText} </Link>
    </button>
  );
};
export default Button;
