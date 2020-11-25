import React, { useState } from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import DoughList from './DoughList';
import FlavorList from './FlavorList';
import SizeList from './SizeList';
import Confirmation from './Confirmation';

export default function Menu() {
  const [currentOption, setCurrentOption] = useState(0);
  const [pizza, setPizza] = useState({
    flavor: '',
    size: '',
    dough: '',
    priceFlavor: 0,
    priceSize: 0,
  });

  function handleSumOption({ option, price }) {
    switch (currentOption) {
      case 0:
        setPizza({ ...pizza, flavor: option, priceFlavor: price });
        break;
      case 1:
        setPizza({ ...pizza, dough: option });
        break;
      case 2:
        setPizza({ ...pizza, size: option, priceSize: price });
        break;
      default:
        break;
    }

    setCurrentOption(currentOption + 1);
  }

  function handleSubtractOption() {
    switch (currentOption) {
      case 1:
        setPizza({ ...pizza, flavor: '', priceFlavor: 0 });
        break;
      case 2:
        setPizza({ ...pizza, dough: '' });
        break;
      case 3:
        setPizza({ ...pizza, size: '', priceSize: 0 });
        break;
      default:
        break;
    }

    setCurrentOption(currentOption - 1);
  }

  function handleResetPizza() {
    setPizza({
      flavor: '',
      size: '',
      dough: '',
      priceFlavor: 0,
      priceSize: 0,
    });
    setCurrentOption(0);
  }

  return (
    <>
      <Header />
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
          />
        )}
      </Container>
    </>
  );
}
