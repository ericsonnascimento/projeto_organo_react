import './FieldText.css'

const FieldText = (props) => { //ao passar o "props" consigo acessar as variaveis "label" e "placeholder" do componente "Form"
        
    return (
        <div className="field-text">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default FieldText