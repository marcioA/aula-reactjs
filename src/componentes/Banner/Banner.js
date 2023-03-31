import { useNavigate } from 'react-router-dom'
import './Banner.css'

export const Banner = () => {
    const navigate = useNavigate();

    // JSX
    return (
        <header className="banner">
            <nav>
                <button onClick={() => navigate('./duvidas')}>Duvidas</button>
            </nav>
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo" />
        </header>
    )
}