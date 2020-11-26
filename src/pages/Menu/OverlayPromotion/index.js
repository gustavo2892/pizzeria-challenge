import React, { useState, useEffect } from 'react';
import getDay from 'date-fns/getDay';
import { useDispatch } from 'react-redux';

import api from '../../../services/api';
import { Container, Overlay } from './styles';
import { formatPrice } from '../../../util/format';
import * as CartActions from '../../../store/modules/cart/actions';

function OverlayPromotion() {
  const [visibleOverlay, setVisibleOverlay] = useState(true);
  const [pizzasPromotion, setPizzaPromotion] = useState([]);

  const dispatch = useDispatch();

  const dayNow = getDay(Date.now());

  useEffect(() => {
    async function loadPromotions() {
      const response = await api.get('promotions');

      const data = response.data.map(pizzaPromotion => ({
        ...pizzaPromotion,
        priceFormatted: formatPrice(pizzaPromotion.total),
      }));

      setPizzaPromotion(data);
    }

    loadPromotions();
  }, []);

  const pizzaDay = pizzasPromotion.filter(p => p.day === dayNow)[0];

  function handleAddPizza(pizza) {
    dispatch(CartActions.addToCartRequest(pizza));
    setVisibleOverlay(false);
  }

  return (
    <Overlay visibleOverlay={visibleOverlay}>
      {pizzaDay && (
        <Container>
          <h3>Promoção na Pizzaria Italiana!!</h3>
          <p>
            A Pizza {pizzaDay.flavor} com Massa {pizzaDay.dough} e Tamanho{' '}
            {pizzaDay.size} está apenas R$ {pizzaDay.total.toFixed(2)}
          </p>
          <button type="button" onClick={() => handleAddPizza(pizzaDay)}>
            Adicionar ao carrinho
          </button>
          <button type="button" onClick={() => setVisibleOverlay(false)}>
            Não, obrigado
          </button>
        </Container>
      )}
    </Overlay>
  );
}

export default OverlayPromotion;
