import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
// import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <>
      <Header />
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {/* {cart.map(product => ( */}
            <tr>
              {/* <td>
              <img src={product.image} alt={product.title} />
            </td> */}
              <td>
                <strong>Pizza Calabresa</strong>
                <span>R$ 70,00</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#e61919" />
                  </button>
                  <input type="number" readOnly value={1} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#228b22" />
                  </button>
                </div>
              </td>
              <td>
                <strong>1</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#e61919" />
                </button>
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </ProductTable>
        <footer>
          <div>
            <button type="button">Finalizar Pedido</button>
          </div>
          <Total>
            <span>TOTAL</span>
            <strong>R$ 30,00</strong>
          </Total>
        </footer>
      </Container>
    </>
  );
}
