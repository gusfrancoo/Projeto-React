import InputProps from "../../interfaces/InputProps.interface"
import "./Input.css"

const Input: React.FC<InputProps> = ({type, text, name, placeholder, handleOnChange, value}) => {
    return(
        <div className="form-group row">
            <div>
                <label className="col-form-label col-md-1 text-md-right" htmlFor={name}> {text}: </label>
            </div>
            <div className="col-md-4">
                <input className="form-control" type={type} 
                        name={name}
                        id={name}
                        placeholder={placeholder} 
                        onChange={handleOnChange}
                        value={value} />
            </div>
        </div>
        
    )
}

export default Input;