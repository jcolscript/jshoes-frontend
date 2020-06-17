import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #141419;
  flex: 1;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: center;
    position: absolute;
    top: 17px;
    left: 96.7%;
    background: #5063f0;
    padding: 3px 8px;
    border-radius: 50px;

    span {
      font-size: 12px;
      color: #fff;
    }
  }
`;
