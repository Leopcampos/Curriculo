const lista = [
    {
        curso: "Entity Framework Core parte 2: mapeando um banco pré-existente",

        certificado: "Alura",

        link: "https://cursos.alura.com.br/certificate/c0469797-a63b-41e0-8d65-c8974c1938f6"
    },
    {
        curso: "Entity Framework Core parte 1: mapeando um banco pré-existente",

        certificado: "Alura",

        link: "https://cursos.alura.com.br/certificate/9e93f360-2329-414f-b840-b4fdca0f0745"

    },
    {

        curso: "Formação ASP.NET Core REST APIs",

        certificado: "Alura",

        link: "https://cursos.alura.com.br/degree/certificate/5273564e-ab8f-41b6-8c89-cc005d8e4287"
    },
    {
        curso: "Microsserviços: Padrões de Projeto",

        certificado: "Alura",

        link: "https://cursos.alura.com.br/user/leopcampos85/course/microsservicos-padroes-projeto/certificate"
    },
    {

        curso: "Formação C# e Orientação a Objetos",

        certificado: "Alura",

        link: "https://cursos.alura.com.br/degree/certificate/95dd39d7-cc4c-4ec7-be61-4871d414d1e2"

    },
    {
        curso: "Criar aplicativos Web com ASP.NET Core para iniciantes",

        certificado: "Microsoft",

        link: "https://learn.microsoft.com/pt-br/training/achievements/learn.aspnet-core-web-app.trophy?username=LeonardoCampos-9058"
    },

    {
        curso: "Dê seus primeiros passos com o C#",

        certificado: "Microsoft",

        link: "https://learn.microsoft.com/pt-br/training/achievements/learn.languages.csharp-first-steps.trophy?username=LeonardoCampos-9058"
    },
    {
        curso: "JavaScript: Explorando a Linguagem",

        certificado: "Alura",

        link: "https://cursos.alura.com.br/certificate/13b12c44-26b6-4a7d-ac06-b2c7477d8ccb"
    },
    {
        curso: "JavaScript: Programando a orientação a objetos",

        certificado: "Alura",

        link: "https://cursos.alura.com.br/certificate/f2cad94f-0367-49e1-927e-2623e0211f35"
    },
    {
        curso: "Formação HTML E CSS",

        certificado: "Alura",

        link: "https://cursos.alura.com.br/degree/certificate/fedb496e-a28d-4d7d-b55c-b5f235de6ee9"
    },
    {
        curso: "SCRUM: Agility in your project",

        certificado: "Alura",

        link: "https://cursos.alura.com.br/certificate/544aed8f-d098-47c1-9924-6b9a2fe93ab8"
    },
    {
        curso: "C# COMPLETO Programação Orientada a Objetos + Projetos",

        certificado: "Udemy",

        link: "https://www.udemy.com/certificate/UC-9e2e1683-5e52-4471-abdc-17bab49d64a4/"
    },
    {
        curso: "Fundamentos do C#",

        certificado: "Balta.io",

        link: "https://balta.io/certificados/10424570-ec03-4e1f-b977-1416ac543a08"
    },
    {
        curso: "Fundamentos da Orientação a Objetos",

        certificado: "Balta.io",

        link: "https://balta.io/certificados/92bf13fb-8355-43b3-961e-ba35bc5a403a"
    },
    {
        curso: "Certificado de Autoridade: NODE.js",

        certificado: "DevMedia",

        link: "https://www.devmedia.com.br/certificado/tecnologia/node-js/leonardo-pereira-campos"
    },
    {
        curso: "Certificado de Autoridade: SQL SERVER",

        certificado: "DevMedia",

        link: "https://www.devmedia.com.br/certificado/tecnologia/sql-server/leonardo-pereira-campos"
    },
    {
        curso: "Certificado de Autoridade: JAVASCRIPT ",

        certificado: "DevMedia",

        link: "https://www.devmedia.com.br/certificado/tecnologia/javascript/leonardo-pereira-campos"
    },
    {
        curso: "Certificado de Autoridade: ALGORITMO",

        certificado: "DevMedia",

        link: "https://www.devmedia.com.br/certificado/tecnologia/algoritmo/leonardo-pereira-campos"
    },
    {
        curso: "Certificado de Autoridade: JAVA ",

        certificado: "DevMedia",

        link: "https://www.devmedia.com.br/certificado/tecnologia/java/leonardo-pereira-campos"
    },
    {
        curso: "Formação de APP e Site Responsivo",

        certificado: "Coti Informática",

        link: "#"
    },
    {
        curso: "Web Developer em Java",

        certificado: "Coti Informática",

        link: "#"
    },
    {
        curso: "JavaScript: Essencial",

        certificado: "Coti Informática",

        link: "#"
    },
]

var certificacoes = document.querySelector('.certificacoes')


let html = '';

for (let element of lista) {
    html += '<a href="' + element.link + '" target="_blank">'
    html += '<div class="conflex"><h2>• ' + element.curso + '<span> (' + element.certificado + ')</span></h2>';



    html += '</div></a>';

}

certificacoes.innerHTML = html;