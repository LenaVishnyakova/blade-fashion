import { createPortal } from "react-dom";
import "./ModalMenu.css";

import logoImg from "../../../images/logo.png";
import iconClose from "../../../images/icon_close.png";
import iconInstagram from "../../../images/links_white/icon_instagram.png"
import iconFacebook from "../../../images/links_white/icon_fb.png"
import iconTwitter from "../../../images/links_white/icon_twitter.png"

const ModalMenu = (props) => {
  if (!props.isOpen) {
    return null;
  }

  function handleClick(tab) {
    props.changeTab(tab)
    props.closeModal()
  }

  return createPortal(
    <section className="modal-wrapper">
      <div className="modal">
        <div className="modal__top">
          <div className="modal__logo-wrapper">
            <img src={logoImg} alt="logo" />
          </div>
          <div className="modal__wrapper-btn">
            <button className="modal__lang-btn">РУС / АНГЛ</button>
            <button className="modal__close-btn" onClick={props.closeModal}>
              <img src={iconClose} alt="close" />
            </button>
          </div>
        </div>
        <nav className="modal__nav">
          <ul className="modal__nav-list">
            <li className="modal__nav-item">
              <a onClick={() => handleClick('main')} href="#">
                Главная
              </a>
            </li>
            <li className="modal__nav-item">
              <a onClick={() => handleClick("members")} href="#">
                Участники
              </a>
            </li>
            <li className="modal__nav-item">
              <a onClick={() => handleClick("jury")} href="#">
                Жюри
              </a>
            </li>
            <li className="modal__nav-item">
              <a onClick={() => handleClick("tickets")} href="#">
                Билеты
              </a>
            </li>
            <li className="modal__nav-item">
              <a onClick={() => handleClick("contacts")} href="#">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <ul className="modal__links">
          <li className="modal__link"><a href="#!"><img src={iconInstagram} alt="facebook" /></a></li>
          <li className="modal__link"><a href="#!"><img src={iconFacebook} alt="instagram" /></a></li>
          <li className="modal__link"><a href="#!"><img src={iconTwitter} alt="twitter" /></a></li>
        </ul>
      </div>
    </section>,
    document.body
  );
};

export default ModalMenu;
