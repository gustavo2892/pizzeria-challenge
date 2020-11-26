import React, { useState } from 'react';
import { uuid } from 'uuidv4';

import { Container } from './styles';
import Header from '../../components/Header';
import DoughList from './DoughList';
import FlavorList from './FlavorList';
import SizeList from './SizeList';
import Confirmation from './Confirmation';
import OverlayPromotion from './OverlayPromotion';

export default function Menu() {
  const [currentOption, setCurrentOption] = useState(0);
  const [addToCartFinalized, setAddToCartFinalized] = useState(false);
  const [pizza, setPizza] = useState({
    id: 0,
    mode: 'normal',
    flavor: '',
    size: '',
    dough: '',
    priceFlavor: 0,
    priceSize: 0,
    total: 0,
  });

  function handleSumOption({ option, price }) {
    switch (currentOption) {
      case 0:
        setPizza({ ...pizza, flavor: option, priceFlavor: price, id: uuid() });
        break;
      case 1:
        setPizza({ ...pizza, dough: option });
        break;
      case 2:
        setPizza({
          ...pizza,
          size: option,
          priceSize: price,
          total: pizza.priceFlavor + price,
        });
        break;
      default:
        break;
    }

    setCurrentOption(currentOption + 1);
  }

  function handleSubtractOption() {
    switch (currentOption) {
      case 1:
        setPizza({ ...pizza, flavor: '', priceFlavor: 0, id: 0 });
        break;
      case 2:
        setPizza({ ...pizza, dough: '' });
        break;
      case 3:
        setPizza({ ...pizza, size: '', priceSize: 0, total: 0 });
        break;
      default:
        break;
    }

    setCurrentOption(currentOption - 1);
  }

  function handleResetPizza() {
    setPizza({
      id: 0,
      mode: 'normal',
      flavor: '',
      size: '',
      dough: '',
      priceFlavor: 0,
      priceSize: 0,
    });
    setCurrentOption(0);
    setAddToCartFinalized(false);
  }

  return (
    <>
      <Header />
      <OverlayPromotion />
      <Container currentOption={currentOption}>
        {currentOption === 0 && (
          <FlavorList
            handleSumOption={handleSumOption}
            handleSubtractOption={handleSubtractOption}
            currentOption={currentOption}
          />
        )}
        {currentOption === 1 && (
          <DoughList
            handleSumOption={handleSumOption}
            handleSubtractOption={handleSubtractOption}
            currentOption={currentOption}
          />
        )}
        {currentOption === 2 && (
          <SizeList
            handleSumOption={handleSumOption}
            handleSubtractOption={handleSubtractOption}
            currentOption={currentOption}
          />
        )}
        {currentOption === 3 && (
          <Confirmation
            pizza={pizza}
            handleSubtractOption={handleSubtractOption}
            currentOption={currentOption}
            handleResetPizza={handleResetPizza}
            addToCartFinalized={addToCartFinalized}
            setAddToCartFinalized={setAddToCartFinalized}
          />
        )}
      </Container>
    </>
  );
}
