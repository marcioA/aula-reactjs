function useColaborador() {
    const buscaColaborador = () => {
        fetch('http://localhost:3333/colaborador')
            .then(async (response) => {
                const data = await response.json();
                console.log(data);
            })
            .catch((err) => console.error(err))
    }

    const adicionaColaborador = (dadosColaborador) => {
        fetch('http://localhost:3333/colaborador', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "colab_nome": "Igor",
                "colab_cargo": "Frontend",
                "colab_imagem": "https://github.com/MacMoraes.png",
                "colab_time": "frontend"
            })
        })
    }


    return { evento: { buscaColaborador, adicionaColaborador } };
}

export default useColaborador;