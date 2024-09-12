import { useRef } from "react";

import Slider from "react-slick";

import MemberCard from "../MemberCard/MemberCard";

import Model1 from "../../images/Models/model_1.png";
import Model2 from "../../images/Models/model_2.png";
import Model3 from "../../images/Models/model_3.png";

import Member1 from "../../images/Members/member_1.png";
import Member2 from "../../images/Members/member_2.png";
import Member3 from "../../images/Members/member_3.png";

import SliderArrow from "../../images/slider-arrow.png";

import "./Members.css";

const Members = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          nextArrow: null,
          prevArrow: null,
          dots: true
        },
      },
    ],
  };

  const membersInfo = [
    {
      textStyle: "классика, нуар",
      modelImg: Model1,
      memberImg: Member1,
      memberName: "Дэвид Робинсон",
      memberCountry: "США",
    },
    {
      textStyle: "авангард, имрессионизм",
      modelImg: Model2,
      memberImg: Member2,
      memberName: "Келли Макдональд",
      memberCountry: "Ирландия",
    },
    {
      textStyle: "классика, нуар",
      modelImg: Model3,
      memberImg: Member3,
      memberName: "Костас Папаниколау",
      memberCountry: "Греция",
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundImage: `url(${SliderArrow})`,
          backgroundRepeat: "no-repeat",
          transform: "scale(-1, 1)",
          width: "32px",
          height: "64px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundImage: `url(${SliderArrow})`,
          backgroundRepeat: "no-repeat",
          width: "32px",
          height: "64px",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="container">
      <section className="members">
        <h1 className="members__title">Участники</h1>
        <Slider {...settings} className="members__list">
          {membersInfo.map((memberInfo) => (
            <MemberCard memberInfo={memberInfo} />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Members;
