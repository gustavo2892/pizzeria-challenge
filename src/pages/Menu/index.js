import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';

import api from '../../services/api';
import { ProductList } from './styles';
import PizzaBackground from '../../assets/images/pizza-background.jpg';
import Header from '../../components/Header';

export default function Menu() {
  const [flavors, setFlavors] = useState([]);

  useEffect(() => {
    async function loadFlavors() {
      const response = await api.get('flavor');

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
      <Header />
      <ProductList>
        {flavors.map(flavor => (
          <li key={flavor.id}>
            <img
              src={
                require(`../../assets/pizzas/${flavor.id}.jpg`) ||
                PizzaBackground
              }
              alt={flavor.type}
            />
            <strong>{flavor.type}</strong>
            <p>{flavor.description}</p>
            <span>{flavor.priceFormatted}</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> {0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    </>
  );
}
