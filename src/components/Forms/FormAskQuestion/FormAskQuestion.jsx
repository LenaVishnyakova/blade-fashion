import { useState } from "react";
import SmallButton from "../../SmallButton/SmallButton";
import "./FormAskQuestion.css";
import ModalFormFilled from "../../modal/ModalFormFilled/ModalFormFilled";

const FormAskQuestion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setFormData(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  function onSubmit(event) {
    event.preventDefault();
    setIsModalOpen(true);
  }

  return (<>
  <ModalFormFilled isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}/>
  <form onSubmit={onSubmit} className="form" action="#">
      <p className="form__subtitle">
        Остались вопросы? Спросите нас! Мы ответим!
      </p>
      <label className="form__input-label">
        имя
        <input
          onChange={handleChange}
          value={formData.name}
          name="name"
          type="text"
          className="form__input"
          placeholder="Введите имя"
        />
      </label>
      <label className="form__input-label">
        email
        <input
          onChange={handleChange}
          value={formData.email}
          name="email"
          type="email"
          className="form__input"
          placeholder="Введите e-mail"
        />
      </label>
      <label className="form__input-label">
        сообщение
        <textarea
          onChange={handleChange}
          value={formData.question}
          name="question"
          type="text"
          className="form__textarea"
          placeholder="Задайте любой вопрос"
        />
      </label>
      <SmallButton>Отправить</SmallButton >
    </form></>
    
  );
};

export default FormAskQuestion;
