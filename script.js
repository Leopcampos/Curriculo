const lista = [
    {
        curso: "C# - Aplicando Princípios SOLID na prática",

        certificado: "Udemy",

        link: "https://www.udemy.com/certificate/UC-1a871295-09e6-46f8-95c8-16f553e20b0d/"
    },
    {
        curso: "Curso de ASP .NET Core MVC - Criando um Site do Zero (NET 6)",

        certificado: "Udemy",

        link: "https://www.udemy.com/certificate/UC-c822d148-8a4a-463f-afa4-b0fbc3290e0d/"
    },
    {
        curso: "MAUI Desenvolvimento Multiplataforma em .NET",

        certificado: "Coti Informática",

        link: "https://drive.google.com/file/d/1V6XDDmhvDbuRusbncMgTsiyJ81wBaq0X/view"
    },
    {
        curso: "Scrum Fundamentals Certified (SFC™)",

        certificado: "SCRUMstudy",

        link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=992098"
    },
    {
        curso: "C# Avançado - Formação Arquiteto",

        certificado: "Coti Informática",

        link: "https://drive.google.com/file/d/1gjwMvsGmsrdj4Rq3T938fDoZXVlvrSZ6/view"
    },
    {
        curso: "C# WebDeveloper - Formação FullStack",

        certificado: "Coti Informática",

        link: "https://drive.google.com/file/d/1Y_wZb64w5Qqm18N-4JKzsxU2-3z4ZnNa/view"
    },
    {
        curso: "Asp.NET Core: uma webapp usando o padrão MVC",

        certificado: "Alura",

        link: "https://cursos.alura.com.br/certificate/b3364bd6-7694-448c-a51c-c00f7a75f233"
    },
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

        link: "https://drive.google.com/file/d/1ozaD7NV-7oZm-tTP00WI04ZFG2KqL6Y1/view?usp=share_link"
    },
    {
        curso: "Web Developer em Java",

        certificado: "Coti Informática",

        link: "https://drive.google.com/file/d/1DuXMNMgQiyjmmijs_yq26MwUWpmLgPYP/view?usp=share_link"
    },
    {
        curso: "JavaScript: Essencial",

        certificado: "Coti Informática",

        link: "https://drive.google.com/file/d/1HcnTll9kT3WjOFBHvO4c7eiMEzz6WXbB/view?usp=share_link"
    },
    {
        curso: "Teste Automatizado em Javascript Jasmine e Cucumber.Js - Essencial",

        certificado: "Coti Informática",

        link: "https://drive.google.com/file/d/1z5prRZw8N0dekob7-0o3SMWW6DfRMnLo/view?usp=share_link"
    }
]

var certificacoes = document.querySelector('.certificacoes')


let html = '';

for (let element of lista) {
    html += '<a href="' + element.link + '" target="_blank">'
    html += '<div class="conflex"><h2>• ' + element.curso + '<span> (' + element.certificado + ')</span></h2>';



    html += '</div></a>';

}

certificacoes.innerHTML = html;