import DropdownList from '../DropdownList'
import FieldText from '../FieldText'
import './Form.css'


const Form = () => {

    const racas = [
        'Terriers',
        'Beagle',
        'Chihuahua',
        'Buldogue inglês',
        'Maltês',
        'Dálmata',
        'Pug',
        'Poodle',
        'Pinscher'
    ]

    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do pet</h2>
                <FieldText label="Nome" placeholder="Digite o nome do PET" />
                <FieldText label="Raça" placeholder="Digite a raça do PET" />
                <FieldText label="Imagem" placeholder="Digite o endereço da imagem do seu PET" />
                <DropdownList label="Raças" itens={racas}/>
            </form>
        </section>
    )
}

export default Form