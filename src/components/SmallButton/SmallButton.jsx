import './SmallButton.css'

const SmallButton = (props) => {
    return ( <button onClick={props.onClick} className="small-button">{props.children}</button> );
}
 
export default SmallButton;