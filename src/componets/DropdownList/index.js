import './DropdownList.css'

const DropdownList = (props) => { //ao passar o "props" consigo acessar a variavel itens do componente "Form"
    console.log(props.itens)

    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => { //através do map estamos iterando sobre "itens" gerando uma variável "item"
                    return <option key={item}>{item}</option> //cada item estará dentro de <option> com a key sendo o nome de cada "item", essa key ajuda o react quando ele deve renderizar o componte, a reclamação por não ter colocado é apresentada no console.
                })}
            </select>
        </div>
    )
}

export default DropdownList