import React from "react";
import styles from './Header.module.scss'

// 정적 이미지 로딩
import foodImage from '../../../assets/img/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {

  const {header, 'main-image':mainImage } =styles;

  return (
    <>
      <hearder className = {header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </hearder>
      <div className={mainImage}>
        <img src={foodImage} alt="맛있어 보여~"/>
      </div>
    </>
  );
};

export default Header;
