import CampoTexto from '../CampoTexto'
import './Formulario.css'

const camposTexto = [
    {
        label: "Nome",
        placeholder: "nome",
        type: "texto"
    },
    {
        label: "Cargo",
        placeholder: "cargo",
        type: "texto"
    },
    {
        label: "Imagem",
        placeholder: "endereço da imagem",
        type: "Imagem"
    }
];

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                {camposTexto.map(campo => {
                    return <CampoTexto label={campo.label} placeholder={campo.placeholder} type={campo.type} />
                })}
                {/* <CampoTexto label="Nome" placeholder="nome" type="texto" />
                <CampoTexto label="Cargo" placeholder="cargo" type="texto" />
                <CampoTexto label="Imagem" placeholder="endereço da imagem" type="imagem" /> */}
            </form>
        </section>
    )
}

export default Formulario