import './FieldText.css'

const FieldText = (props) => { //ao passar o "props" consigo acessar as variaveis "label" e "placeholder" do componente "Form".
    //required={props.required}: para que isto funcione, criamos uma variável "required={true}" no "Form".

    let valueInput = ''

    const toType = (event) => {
        valueInput = event.target.value
        console.log(valueInput)
    }

    return (
        <div className="field-text">
            <label>{props.label}</label>
            <input onChange={toType} required={props.requiredField} placeholder={props.placeholder}/>
        </div>
    )
}

export default FieldText