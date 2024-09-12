import arrow from '../../images/arrow.png'

import './BigButton.css'

const BigButton = () => {
  return (
    <button className="button">
      <div className="button-white">
        <span>БРОНЬ БИЛЕТА</span>
      </div>
      <div className="button-orange">
        <img src={arrow} alt="arrow" />
      </div>
    </button>
  );
};

export default BigButton;
