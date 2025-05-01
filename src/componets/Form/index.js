import Buttun from '../Button'
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

    //função que retira o caregamento da página toda ao clicar no botão, retirando o comportamento padrão do react, trazendo ao desenvolvedor o controle da página.
    const onSave = (event) => {
        event.preventDefault()
        console.log('Form submetido!')
    }

    //podemos acrescentar ao "Form" os componentes desta forma: <Buttun "conteúdo que chama o props" /> ou assim <Buttun> "com filhos do tipo <img> ou <a>" </Buttun> esse segundo comportamento terá comportamento do tipo "props.chieldren" ao acessa-lo.   
    
    //<form onSubmit={onSave}> : aqui estamos capturando o clique do botão através do evendo "onSubmit" passando a const "onSave" que está sendo refletida com a execução da função.
    
    //required={true}: agora temos o preenchimento obrigatórios, utilizamos a validação do próprio HTML5 nos componentes "FieldText" e "DropdownList" nos seu respectivos "index.js".
    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do pet</h2>
                <FieldText requiredField={true} label="Nome" placeholder="Digite o nome do PET" />
                <FieldText requiredField={true} label="Raça" placeholder="Digite a raça do PET" />
                <FieldText label="Imagem" placeholder="Digite o endereço da imagem do seu PET" />
                <DropdownList requiredField={true} label="Raças" itens={racas}/>
                <Buttun>Criar Card</Buttun>
            </form>
        </section>
    )
}

export default Form