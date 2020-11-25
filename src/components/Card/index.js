import React from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft } from 'react-icons/md';

import { Container } from './styles';

export default function Card({ title, currentOption, handleSubtractOption }) {
  return (
    <Container>
      <div>
        {currentOption !== 0 && (
          <button type="button" onClick={() => handleSubtractOption()}>
            <MdChevronLeft size={36} color="#000" />
          </button>
        )}
      </div>
      <>
        <h3>{title}</h3>
      </>
      <div />
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  currentOption: PropTypes.number,
  handleSubtractOption: PropTypes.func,
};
