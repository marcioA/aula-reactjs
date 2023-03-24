import './CampoTexto.css'

const CampoTexto = ({ placeholder, label, type }) => {
    // let placeholderModificada;

    // if (type === 'texto')
    //     placeholderModificada = `Digite seu ${placeholder}`;
    // else if (type === "imagem")
    //     placeholderModificada = `Digite o ${placeholder}`;

    // const placeholderModificada = placeholder+"...";
    // const placeholderModificada = placeholder+'...';
    // "Coloque o texto aqui", 'Coloque o texto aqui'. `Coloque o ${texto}` 
    // == compara apenas o conteudo
    // === compara o conteudo e o tipo da variavel (se é numero, se é texto ou se é obj)

    const placeholderModificada = type === "texto" ? `Digite seu ${placeholder}` :
        type === "imagem" ? `Digite o ${placeholder}` : "Ocorreu um erro, contate o admin";

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto