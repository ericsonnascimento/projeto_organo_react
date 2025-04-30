import './FieldText.css'

const FieldText = (props) => { //ao passar o "props" consigo acessar as variaveis "label" e "placeholder" do componente "Form".
    //required={props.required}: para que isto funcione, criamos uma variável "required={true}" no "Form".
    return (
        <div className="field-text">
            <label>{props.label}</label>
            <input required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default FieldText