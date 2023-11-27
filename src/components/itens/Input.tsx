import InputProps from "../../interfaces/InputProps.interface"
import styles from "./Input.module.css"

const Input: React.FC<InputProps> = ({type, text, name, placeholder, handleOnChange, value}) => {
    return(
        <div className={`form-group row ${styles.form_group}`}>
            <label className={`col-md-1 text-md-right ${styles.form_label}`} htmlFor={name}> {text}: </label>
            <div className="col-md-9">
                <input className={`form-control ${styles.form_control}`} type={type} 
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