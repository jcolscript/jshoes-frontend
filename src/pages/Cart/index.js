import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdShoppingCart,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductTable,
  CheckoutActions,
  Total,
  CartEmpty,
} from './styles';

export default function Cart() {
  const history = useHistory();
  const dispatch = useDispatch();

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.amount * product.price),
    }))
  );

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((sum, product) => {
        return sum + product.price * product.amount;
      }, 0)
    )
  );

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  return (
    <Container>
      {cart.length > 0 ? (
        <>
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
              {cart.map((product) => (
                <tr>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormated}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(product)}>
                        <MdRemoveCircleOutline size={20} color="#5063f0" />
                      </button>
                      <input
                        type="number"
                        readOnly
                        value={product.amount}
                        style={{ cursor: 'not-allowed' }}
                      />
                      <button type="button" onClick={() => increment(product)}>
                        <MdAddCircleOutline size={20} color="#5063f0" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
                    >
                      <MdDelete size={20} color="#5063f0" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>
          <footer>
            <CheckoutActions>
              <button type="button">FINALIZAR PEDIDO</button>
              <button type="button" onClick={() => history.push('/')}>
                ESCOLHER MAIS PRODUTOS
              </button>
            </CheckoutActions>
            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </>
      ) : (
        <CartEmpty>
          <MdShoppingCart size={100} color="#5063f0" />
          <h1>Seu carrinho está vazio</h1>
          <p>
            Adicione produtos clicando no botão “ADICIONAR AO CARRINHO” na
            página de produto.
          </p>
          <button type="button" onClick={() => history.push('/')}>
            VOLTAR PARA A PÁGINA INICIAL
          </button>
        </CartEmpty>
      )}
    </Container>
  );
}
