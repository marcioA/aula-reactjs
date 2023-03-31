import { useState } from 'react'
import useColaborador from '../../hooks/useColaborador'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [colaboradores, setColaboradores] = useState([]);

    const colab = useColaborador();

    // colab.evento.buscaColaborador();

    const aoSalvar = (evento) => {
        evento.preventDefault()
        // props.aoColaboradorCadastrado({
        //     nome,
        //     cargo,
        //     imagem,
        //     time
        // })
        setColaboradores([...colaboradores, { nome, cargo, imagem, time }])
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <div>
                <button onClick={colab.evento.adicionaColaborador}>Adicionar Colaborador Fixo</button>
                {colaboradores.map(colaborador => (

                    <div>
                        <h1>{colaborador.nome}</h1>
                        <h1>{colaborador.cargo}</h1>
                        <h1>{colaborador.imagem}</h1>
                        <h1>{colaborador.time}</h1>
                    </div>

                ))}
            </div>
        </section>
    )
}

export default Formulario