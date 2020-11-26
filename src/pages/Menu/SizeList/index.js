import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../util/format';

import api from '../../../services/api';
import { ProductList } from './styles';
import PizzaBackground from '../../../assets/images/pizza-background.jpg';
import Card from '../../../components/Card';

export default function SizeList({
  currentOption,
  handleSumOption,
  handleSubtractOption,
}) {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    async function loadSizes() {
      const response = await api.get('sizes');

      const data = response.data.map(size => ({
        ...size,
        priceFormatted: formatPrice(size.price),
      }));

      setSizes(data);
    }

    loadSizes();
  }, []);

  return (
    <>
      <Card
        title="Escolha o tamanho"
        handleSubtractOption={handleSubtractOption}
        currentOption={currentOption}
        addToCartFinalized={false}
      />
      <ProductList>
        {sizes.map(size => (
          <li key={size.id}>
            <img
              src={
                require(`../../../assets/sizes/${size.id}.jpg`) ||
                PizzaBackground
              }
              alt={size.type}
            />
            <strong>{size.type}</strong>
            <p>{size.description}</p>
            <span>+ {size.priceFormatted}</span>

            <button
              type="button"
              onClick={() =>
                handleSumOption({
                  option: size.type,
                  price: size.price,
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

SizeList.propTypes = {
  currentOption: PropTypes.number,
  handleSumOption: PropTypes.func,
  handleSubtractOption: PropTypes.func,
};
