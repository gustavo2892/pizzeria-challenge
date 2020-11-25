import React, { useState, useEffect } from 'react';

import { formatPrice } from '../../../util/format';

import api from '../../../services/api';
import { ProductList } from './styles';
import PizzaBackground from '../../../assets/images/pizza-background.jpg';
import Header from '../../../components/Header';
import Card from '../../../components/Card';

export default function DoughList() {
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
      <Header />
      <Card
        title="Escolha a massa"
        description="Selecione um dos tipos de massa"
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

            <button type="button">
              <span>SELECIONAR</span>
            </button>
          </li>
        ))}
      </ProductList>
    </>
  );
}
