import { useEffect, useState } from 'react';
import useColaborador from '../../hooks/useColaborador';
import './Colaborador.css'

const Colaborador = () => {
    const [colaboradores, setColaboradores] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { evento } = useColaborador();

    useEffect(() => {
        async function busca() {
            const colaboradoresBd = await evento.buscaColaborador();
            if (colaboradoresBd)
                setColaboradores([...colaboradoresBd]);
        }
        busca();
    }, [evento]);

    useEffect(() => {
        if (colaboradores.length > 0)
            setIsLoaded(true);
    }, [colaboradores])


    return (
        <section className='main'>
            <div className='conteiner_colaborador'>
                {
                    isLoaded && colaboradores.map(colaborador => {
                        const { id, nome, imagem, cargo } = colaborador;
                        const corDeFundo = "#164DC6"
                        return <div className='colaborador' key={id}>
                            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                                <img src={imagem} alt={nome} />
                            </div>
                            <div className='rodape'>
                                <h4>{nome}</h4>
                                <h5>{cargo}</h5>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Colaborador