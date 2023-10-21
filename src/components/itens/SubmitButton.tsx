import "./SubmitButton.css"

const SubmitButton = ({text}:{text?:string}) =>{
    return (
        <div className="row">
            <button className="btn col-sm-5 btn-primary">{text}</button>
        </div>
    );
};
export default SubmitButton;