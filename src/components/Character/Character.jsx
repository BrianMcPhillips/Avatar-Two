import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, image, id }) => (
  <figure>
    <Link to={`/detail/${id}`}>
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
    </Link>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Character;
