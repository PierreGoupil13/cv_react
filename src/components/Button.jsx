import "./Button.css"
function Button(props) {

    return (
        <div className="buttonContainer">
            <a className="buttonHyper" href="#">{props.textButton}</a>
        </div>
    );
}
export default Button;