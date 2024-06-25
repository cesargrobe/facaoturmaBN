const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como as profissões do futuro podem promover a inclusão digital enquanto contribuem para soluções em face do aquecimento global?",
        alternativas: ["Com a evolução das profissões e a  inclusão digital ao desenvolver tecnologias acessíveis para comunidades remotas pode reduzir a dependência de combustíveis fósseis e mitigando os efeitos do aquecimento global.", "O pensamento evoluir faz-se crescer a buscar para soluções que levarão a evolução tanto da população quanto resolução de problemas complexos."]
    },
    {
        enunciado: "De que forma o Inclusão digital pode auxiliar na formação de novas  profissões que promovam um futuro mais sustentável?",
        alternativas: ["Acesso à Educação e Treinamento, empreendedorismo e inovação, Trabalho remoto e Freelance", "Acessibilidade com tecnologias assistivas, comunidades online, facilitando o acesso ao conhecimento."]
    },
    {
        enunciado: "Nos dias atuais percebemos que diversas alterações climáticas estão causando desastres naturais com uma intensidade que era esperada para daqui a 20 anos. Cada vez mais estão se confirmando episódios de desastres naturais devido ao aquecimento global. Esse cenário demanda o surgimento de novas profissões que venham a mitigar esse quadro. Para o seu futuro, você escolherá qual tipo de profissão?",
        alternativas: ["Eu não acredito no aquecimento global é fake news! Eu me importo com uma profissão rentável!", "Eu acredito no aquecimento global e vou me focar em profissões tecnológicas que ajudem na mitigação!"]
    },
];