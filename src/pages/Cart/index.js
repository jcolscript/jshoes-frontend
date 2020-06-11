import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ts=1587045307&ims=326x"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis de Caminhada Leve</strong>
              <span> R$ 129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#5063f0" />
                </button>
                <input
                  type="number"
                  readOnly
                  value={2}
                  style={{ cursor: 'not-allowed' }}
                />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#5063f0" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#5063f0" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">FINALIZAR PEDIDO</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,70</strong>
        </Total>
      </footer>
    </Container>
  );
}
