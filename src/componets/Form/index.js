import FieldText from '../FieldText'
import './Form.css'


const Form = () => {
    return (
        <section>
            <form>
                <FieldText label="Nome" placeholder="Digite o nome do PET" />
                <FieldText label="Raça" placeholder="Digite a raça do PET" />
                <FieldText label="Imagem" placeholder="Digite o endereço da imagem do seu PET" />
            </form>
        </section>
    )
}

export default Form