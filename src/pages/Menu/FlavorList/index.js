import React, { useState, useEffect } from 'react';

import { formatPrice } from '../../../util/format';

import api from '../../../services/api';
import { ProductList } from './styles';
import PizzaBackground from '../../../assets/images/pizza-background.jpg';
import Header from '../../../components/Header';
import Card from '../../../components/Card';

export default function FlavorList() {
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
      <Header />
      <Card
        title="Escolha um sabor"
        description="Selecione um dos sabores a seguir"
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

            <button type="button">
              <span>SELECIONAR</span>
            </button>
          </li>
        ))}
      </ProductList>
    </>
  );
}
