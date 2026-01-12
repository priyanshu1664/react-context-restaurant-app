import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcons";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../store/cartContext";

function HeaderCartButton({ onButtonClick }) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={onButtonClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
