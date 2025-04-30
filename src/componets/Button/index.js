import './Button.css'

const Buttun = (props) => {
    return( //comportamento diferente do "props.children": significa que tudo que estiver dentro da tag <button></button> em "Forms" será refletido dentro do botão no frontend, pode ser uma <img> (imagem de fundo), pode ser <a> (âncora), entre outras coisas.
        <button className='button'>
            {props.children} 
        </button>
    )
}

export default Buttun