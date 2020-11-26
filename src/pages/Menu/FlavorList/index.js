import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../util/format';

import api from '../../../services/api';
import { ProductList } from './styles';
import PizzaBackground from '../../../assets/images/pizza-background.jpg';
import Card from '../../../components/Card';

export default function FlavorList({
  currentOption,
  handleSumOption,
  handleSubtractOption,
}) {
  const [flavors, setFlavors] = useState([]);

  useEffect(() => {
    async function loadFlavors() {
      const response = await api.get('flavors');

      const data = response.data.map(flavor => ({
        ...flavor,
        priceFormatted: formatPrice(flavor.price),
      }));

      setFlavors(data);
    }

    loadFlavors();
  }, []);

  return (
    <>
      <Card
        title="Escolha um sabor"
        handleSubtractOption={handleSubtractOption}
        currentOption={currentOption}
        addToCartFinalized={false}
      />
      <ProductList>
        {flavors.map(flavor => (
          <li key={flavor.id}>
            <img
              src={
                require(`../../../assets/pizzas/${flavor.id}.jpg`) ||
                PizzaBackground
              }
              alt={flavor.type}
            />
            <strong>{flavor.type}</strong>
            <p>{flavor.description}</p>
            <span>{flavor.priceFormatted}</span>

            <button
              type="button"
              onClick={() =>
                handleSumOption({
                  option: flavor.type,
                  price: flavor.price,
                })
              }
            >
              <span>SELECIONAR</span>
            </button>
          </li>
        ))}
      </ProductList>
    </>
  );
}

FlavorList.propTypes = {
  currentOption: PropTypes.number,
  handleSumOption: PropTypes.func,
  handleSubtractOption: PropTypes.func,
};
