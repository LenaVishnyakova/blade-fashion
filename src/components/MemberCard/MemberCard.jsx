import './MemberCard.css'

// import Member1 from '../../images/Members/member_1.png'

// import Model1 from '../../images/Models/model_1.png'

import iconInstagram from "../../images/links_grey/icon_grey-instagram.png"
import iconFacebook from "../../images/links_grey/icon_grey-fb.png"
import iconTwitter from "../../images/links_grey/icon_grey-twitter.png"

const MemberCard = (props) => {
    return ( 
        <article className='member-card'>
            <div className="member-card__top">
                <span className="member-card__style">{props.memberInfo.textStyle}</span>
            <img className='member-card__model-img' src={props.memberInfo.modelImg} alt="member 1" />
            </div>
            <div className="member-card__info">
                <img src={props.memberInfo.memberImg} alt="member" className="member-card__info-img" />
                <div className="member-card__info-text">
                    <h4 className="member-card__info-name">{props.memberInfo.memberName}</h4>
                    <span className="member-card__info-country">{props.memberInfo.memberCountry}</span>
                </div>
                <ul className="member-card__links">
                    <li className="member-card__link"><a href="#!"><img src={iconInstagram} alt="facebook" /></a></li>
                    <li className="member-card__link"><a href="#!"><img src={iconFacebook} alt="instagram" /></a></li>
                    <li className="member-card__link"><a href="#!"><img src={iconTwitter} alt="twitter" /></a></li>
                </ul>
            </div>
            
        </article>
     );
}
 
export default MemberCard;