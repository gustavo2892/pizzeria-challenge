import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../util/format';

import api from '../../../services/api';
import { ProductList } from './styles';
import PizzaBackground from '../../../assets/images/pizza-background.jpg';
import Card from '../../../components/Card';

export default function DoughList({
  currentOption,
  handleSumOption,
  handleSubtractOption,
}) {
  const [doughs, setDoughs] = useState([]);

  useEffect(() => {
    async function loadDoughs() {
      const response = await api.get('doughs');

      const data = response.data.map(dough => ({
        ...dough,
        priceFormatted: formatPrice(dough.price),
      }));

      setDoughs(data);
    }

    loadDoughs();
  }, []);

  return (
    <>
      <Card
        title="Escolha a massa"
        handleSubtractOption={handleSubtractOption}
        currentOption={currentOption}
      />
      <ProductList>
        {doughs.map(dough => (
          <li key={dough.id}>
            <img
              src={
                require(`../../../assets/pizzas/${dough.id}.jpg`) ||
                PizzaBackground
              }
              alt={dough.type}
            />
            <strong>{dough.type}</strong>

            <button
              type="button"
              onClick={() => handleSumOption({ option: dough.type, price: 0 })}
            >
              <span>SELECIONAR</span>
            </button>
          </li>
        ))}
      </ProductList>
    </>
  );
}

DoughList.propTypes = {
  currentOption: PropTypes.number,
  handleSumOption: PropTypes.func,
  handleSubtractOption: PropTypes.func,
};
