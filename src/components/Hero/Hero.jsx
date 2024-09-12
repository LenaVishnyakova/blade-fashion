import heroImg from "../../images/hero.png";

import iconCalender from '../../images/icon_calendar.png'
import iconLocation from '../../images/icon_location.png'
import iconWinner from '../../images/icon_winner.png'

import iconFb from '../../images/links_white/icon_fb.png'
import iconInstagram from '../../images/links_white/icon_instagram.png'
import iconTwitter from '../../images/links_white/icon_twitter.png'

import './Hero.css'

import BigButton from "../BigButton/BigButton";

const Hero = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero__info">
          <span className="hero__hashtag">#bladefashion2019</span>
          <h1 className="hero__title">
            Показ лучших молодых дизайнеров России
          </h1>
          <ul className="hero__subtitle">
            <li className="hero__subtitle-item">
              <img src={iconCalender} alt="calendar" className="hero__subtitle-icon" />
              <span className="hero__subtitle-text">
                18 ноября 12:30 – 20:00
              </span>
            </li>
            <li className="hero__subtitle-item">
              <img src={iconLocation} alt="location" className="hero__subtitle-icon" />
              <span className="hero__subtitle-text">
                Москва Лофт-центр «Эдем»
              </span>
            </li>
            <li className="hero__subtitle-item">
              <img src={iconWinner} alt="winner" className="hero__subtitle-icon" />
              <span className="hero__subtitle-text">
                Победитель едет на показ Blade в Париж!
              </span>
            </li>
          </ul>

          <BigButton />

          <ul className="hero__links">
            <li className="hero__link"><a href="#!"><img src={iconFb} alt="" /></a></li>
            <li className="hero__link"><a href="#!"><img src={iconInstagram} alt="" /></a></li>
            <li className="hero__link"><a href="#!"><img src={iconTwitter} alt="" /></a></li>
        </ul>
        </div>
        
        <img className="hero__img" src={heroImg} alt="heroImg" />
      </section>
    </div>
  );
};

export default Hero;
