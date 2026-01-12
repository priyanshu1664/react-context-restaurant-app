import React from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
function Header({ onShowCart }) {
  return (
    <div>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onButtonClick={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src="images/meals.jpg" alt="Background Image" />
      </div>
    </div>
  );
}

export default Header;
