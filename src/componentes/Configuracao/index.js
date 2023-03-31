import { useNavigate } from 'react-router-dom';
import './Configuracao.css'

const Configuracao = () => {
    const navigate = useNavigate();
    return (
        <section className='main'>
            <button onClick={() => navigate('../')}>Duvidas</button>
            <button onClick={() => navigate('/')}>Home</button>
            <div className='conteiner_configuracao'>
                <h1>Configuração</h1>
            </div>
        </section>
    )
}

export default Configuracao;