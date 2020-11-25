import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ title, description }) {
  return (
    <Container>
      <h3>{title}</h3>
      <span>{description}</span>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
