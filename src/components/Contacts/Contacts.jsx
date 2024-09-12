import "./Contacts.css";

import iconFB from "../../images/links_grey/icon_grey-fb.png";
import iconInstagram from "../../images/links_grey/icon_grey-instagram.png";
import iconTwitter from "../../images/links_grey/icon_grey-twitter.png";
import FormAskQuestion from "../Forms/FormAskQuestion/FormAskQuestion";

const Contacts = () => {
  return (
    <div className="container">
      <section className="contacts">
        <h1 className="contacts__title">Свяжитесь с нами</h1>
        <div className="contacts__content">
          <div className="contacts__left-content">
            <div className="contacts__info">
              <div className="contacts__info-block">
                <h6 className="contacts__info-block-title">Офис продаж</h6>
                <span className="contacts__info-block-data">
                  363561, Москва ул. Пушкина 17/1
                </span>
              </div>
              <div className="contacts__info-block">
                <h6 className="contacts__info-block-title">Для связи</h6>
                <a href="#!" className="contacts__info-block-data">
                  +7 (924) 456 78 90
                </a>
                <a href="#!" className="contacts__info-block-data">
                  bfw@gmail.com
                </a>
              </div>
              <div className="contacts__info-block">
                <h6 className="contacts__info-block-title">Подпишитесь</h6>
                <ul className="contacts__info-block-links">
                  <li className="contacts__info-block-link">
                    <img src={iconFB} alt="icon FB" />
                  </li>
                  <li className="contacts__info-block-link">
                    <img src={iconInstagram} alt="icon Instagram" />
                  </li>
                  <li className="contacts__info-block-link">
                    <img src={iconTwitter} alt="icon Twitter" />
                  </li>
                </ul>
              </div>
            </div>

            <iframe className="contacts__map"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad4c2eb9d469ad582023360f488fdfeba22c99f1d49a502e38daa39ade6f6490b&amp;source=constructor"
              width="810"
              height="462"
              frameborder="0"
            ></iframe>

          </div>

          <FormAskQuestion />
        </div>
      </section>
    </div>
  );
};

export default Contacts;
