function useColaborador() {
    const buscaColaborador = async () => {
        const data = await fetch('http://localhost:3333/colaborador')
            .then(async (response) => {
                const data = await response.json();
                return data;
            })
            .catch((err) => console.error(err));

        return data;
    }

    const adicionaColaborador = async (dadosColaborador) => {
        const criado = await fetch('http://localhost:3333/colaborador', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "colab_nome": dadosColaborador.nome,
                "colab_cargo": dadosColaborador.cargo,
                "colab_imagem": dadosColaborador.imagem,
                "colab_time": dadosColaborador.time
            })
        });
        return criado;
    }


    return { evento: { buscaColaborador, adicionaColaborador } };
}

export default useColaborador;