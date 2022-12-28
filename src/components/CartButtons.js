import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" onClick={closeSidebar} className="cart-btn">
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: white;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }
  .cart-btn:hover {
    color: var(--clr-primary-6);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .cart-container {
      display: flex;
      align-items: center;
      position: relative;
      svg {
        height: 1.6rem;
        margin-left: 2px;
      }
    }
    .cart-value {
      position: absolute;
      top: -10px;
      right: -16px;
      background: var(--clr-primary-5);
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.75rem;
      color: var(--clr-white);
      padding: 12px;
    }
    .auth-btn {
      display: flex;
      align-items: center;
      background: transparent;
      border-color: transparent;
      font-size: 1.5rem;
      cursor: pointer;
      color: white;
      letter-spacing: var(--spacing);
    }
    .auth-btn:hover {
      color: var(--clr-primary-6);
      cursor: pointer;
    }
  }
`;
export default CartButtons;
