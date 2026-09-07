function calcularResultado() {

    const perguntas = ["q1", "q2", "q3", "q4"];

    let pontos = 0;

    for (let pergunta of perguntas) {

        const resposta =
            document.querySelector(
                'input[name="' + pergunta + '"]:checked'
            );

        if (!resposta) {

            alert(
                "Responda todas as perguntas antes de continuar."
            );

            return;
        }

        pontos += Number(resposta.value);

    }


    const resultado =
        document.getElementById("resultado");

    const titulo =
        document.getElementById("resultadoTitulo");

    const texto =
        document.getElementById("resultadoTexto");


    if (pontos <= 2) {

        titulo.innerHTML =
            "🟢 Continue cuidando de você.";

        texto.innerHTML =
            "Continue observando como você se sente, " +
            "mantenha sua rede de apoio e lembre-se de que " +
            "buscar ajuda também é uma forma de prevenção.";

    }

    else if (pontos <= 5) {

        titulo.innerHTML =
            "🟡 Alguns pontos merecem atenção.";

        texto.innerHTML =
            "Pode ser interessante conversar com alguém " +
            "de confiança e buscar orientação de um profissional " +
            "de saúde. Você não precisa esperar piorar.";

    }

    else {

        titulo.innerHTML =
            "🔵 Você não precisa lidar com isso sozinho.";

        texto.innerHTML =
            "Considere conversar com alguém de confiança e " +
            "procurar um serviço de saúde para receber orientação.";

    }


    resultado.classList.add("mostrar");

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function caso(nome) {

    alert(
        "CASO: " + nome +
        "\n\n" +
        "Esta área será desenvolvida com fatos documentados, " +
        "contexto, fontes confiáveis e uma seção explicando " +
        "o que não pode ser concluído sobre saúde mental."
    );

}