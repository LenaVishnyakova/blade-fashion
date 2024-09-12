import { useState } from "react";

import logoImg from "../../images/logo.png";

import "./Header.css";

import iconMenu from '../../images/icon_menu.png'
import ModalMenu from "../modal/ModalMenu/ModalMenu";

const Header = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const styles = {
    color: props.active === 'main' ? "#ffffff" : "#303030",
  };

  return (
    <div className="container">
      <ModalMenu changeTab={(current) => props.changeTab(current)} isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}/>
      <header className="header">
        <div className="header__logo-wrapper">
          <img className="header__logo-img" src={logoImg} alt="logoBlade" /> 
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className={props.active ==  'main' ? "header__nav-item header__nav-item-active" : "header__nav-item"}>
              <a style={styles} onClick={() => props.changeTab('main')} href="#">Главная</a>
            </li>
            <li className={props.active ==  'members' ? "header__nav-item header__nav-item-active" : "header__nav-item"}>
              <a style={styles} onClick={() => props.changeTab('members')} href="#">Участники</a>
            </li>
            <li className={props.active ==  'jury' ? "header__nav-item header__nav-item-active" : "header__nav-item"}>
              <a style={styles} onClick={() => props.changeTab('jury')} href="#">Жюри</a>
            </li>
            <li className={props.active ==  'tickets' ? "header__nav-item header__nav-item-active" : "header__nav-item"}>
              <a style={styles} onClick={() => props.changeTab('tickets')} href="#">Билеты</a>
            </li>
            <li className={props.active ==  'contacts' ? "header__nav-item header__nav-item-active" : "header__nav-item"}>
              <a style={styles} onClick={() => props.changeTab('contacts')} href="#">Контакты</a>
            </li>
          </ul>
          <button style={styles}  className="header__nav-lang">РУС</button>
        </nav>
        <a className="header__menu" onClick={() => setIsModalOpen(true)} href="#"><img src={iconMenu} alt="menu" /></a>
      </header>
    </div>
  );
};

export default Header;
