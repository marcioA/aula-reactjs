import { useNavigate } from 'react-router-dom';
import './Duvidas.css'

const Duvidas = () => {
    const navigate = useNavigate();
    return (
        <section className='main'>
            <button onClick={() => navigate('./configuracao')}>Configuracao</button>
            <button onClick={() => navigate('/')}>Home</button>
            <div className='conteiner_duvidas'>
                <h1>Duvidas</h1>
            </div>
        </section>
    )
}

export default Duvidas;