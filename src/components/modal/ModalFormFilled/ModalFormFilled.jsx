import { createPortal } from "react-dom";

import './ModalFormFilled.css'

import check from '../../../images/check.png'
import SmallButton from "../../SmallButton/SmallButton";

const ModalFormFilled = (props) => {
    if (!props.isOpen) {
        return null;
    }

    return createPortal( <section className="modal-form-filled__wrapper">
        <div className="modal-form-filled">
            <img src={check} alt="check" className="modal-form-filled__check" />
            <p className="modal-form-filled__text">Спасибо за ваш вопрос! Ваша заявка в работе. Мы ответим в течение дня обязательно, будьте на связи!</p>
            <SmallButton onClick={props.closeModal}>Понятно</SmallButton>
        </div>
    </section>,
    document.body );
}
 
export default ModalFormFilled;