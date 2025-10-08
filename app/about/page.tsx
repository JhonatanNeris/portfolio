"use client";

import { useState } from "react";

import EducationCard from "@/components/EducationCard/EducationCard"
import Container from "../../components/Container/Container"

const formacoes = [
    {
        curso: "Análise e Desenvolvimento de Sistemas",
        instituicao: "Universidade UDF",
        periodo: "Agosto 2022 - Julho 2024",
    },
    {
        curso: "Gestão Pública",
        instituicao: "Faculdade Unyleya",
        periodo: "Agosto 2018 - Agosto 2021",
    },
    {
        curso: "Ensino Médio",
        instituicao: "Colégio CIMAN",
        periodo: "Fevereiro 2014 - Novembro 2016",
    },
]

const cursos = [
    // Udemy
    { curso: "Formação Front-end – HTML, CSS, JavaScript, React+", instituicao: "Udemy", periodo: "abril/2024" },
    { curso: "Node.js do Zero à Maestria com diversos Projetos", instituicao: "Udemy", periodo: "junho/2024" },
    { curso: "React do Zero à Maestria (hooks, router, API, projetos)", instituicao: "Udemy", periodo: "fevereiro/2024" },
    { curso: "C# COMPLETO – Programação Orientada a Objetos + Projetos", instituicao: "Udemy", periodo: "maio/2024" },
    { curso: "Next.js e React – Curso Completo: Aprenda com Projetos", instituicao: "Udemy", periodo: "maio/2024" },
    // (o curso “React Avançado: NextJS/Strapi…” estava como Não iniciado – não incluí)

    // Danki Code
    { curso: "Curso de Java Web", instituicao: "Danki Code", periodo: "junho/2024" },
    { curso: "Curso Node.js", instituicao: "Danki Code", periodo: "maio/2024" },
    { curso: "Curso Banco de Dados", instituicao: "Danki Code", periodo: "setembro/2023" },
    { curso: "Curso de C# Completo", instituicao: "Danki Code", periodo: "outubro/2023" },
    { curso: "Curso de JavaScript Completo", instituicao: "Danki Code", periodo: "março/2023" },
    { curso: "Curso de Scrum", instituicao: "Danki Code", periodo: "fevereiro/2023" },

    // Alura – trilha React/JS
    { curso: "React: desenvolvendo com JavaScript", instituicao: "Alura", periodo: "junho/2024" },
    { curso: "React: como os componentes funcionam", instituicao: "Alura", periodo: "junho/2024" },
    { curso: "React: desenvolvendo em React Router com JavaScript", instituicao: "Alura", periodo: "junho/2024" },
    { curso: "React: estilize componentes com Styled Components", instituicao: "Alura", periodo: "agosto/2024" },
    { curso: "React: gerencie estados globalmente com Context API", instituicao: "Alura", periodo: "agosto/2024" },
    { curso: "React: praticando React com JS", instituicao: "Alura", periodo: "agosto/2024" },
    { curso: "React: migrando para TypeScript", instituicao: "Alura", periodo: "agosto/2024" },
    { curso: "Explore React com JavaScript (Formação)", instituicao: "Alura", periodo: "agosto/2024" },
    { curso: "React: integrando seu projeto React com APIs", instituicao: "Alura", periodo: "setembro/2024" },
    { curso: "React: escrevendo com TypeScript", instituicao: "Alura", periodo: "agosto/2024" },
    { curso: "React: gerenciando estado com Recoil", instituicao: "Alura", periodo: "janeiro/2024" },

    // Alura – Node.js
    { curso: "Node.js: lidando com buscas, filtros, paginação e erros em uma API", instituicao: "Alura", periodo: "setembro/2023" },
    { curso: "Node.js: criando uma API REST com Express e MongoDB", instituicao: "Alura", periodo: "setembro/2023" },

    // Alura – C# / .NET
    { curso: "C#: criando sua primeira aplicação", instituicao: "Alura", periodo: "setembro/2023" },
    { curso: "C#: aplicando Orientação a Objetos", instituicao: "Alura", periodo: "setembro/2023" },
    { curso: "C#: dominando Orientação a Objetos", instituicao: "Alura", periodo: "setembro/2023" },
    { curso: "C#: consumindo API, gravando arquivos e utilizando LINQ", instituicao: "Alura", periodo: "setembro/2023" },
    { curso: "Aprenda a programar em C# com Orientação a Objetos (Formação)", instituicao: "Alura", periodo: "outubro/2023" },
    { curso: "C#: trabalhando com Arrays e Coleções", instituicao: "Alura", periodo: "outubro/2023" },
    { curso: ".NET: persistindo dados com Entity Framework Core", instituicao: "Alura", periodo: "março/2025" },

    // (o “next.js: conheça o framework React” aparecia como Finalizando – deixei de fora)
];

const MESES = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

const key = (p: string) => {
  const [mesStr, anoStr] = p.split("/");
  const mes = String(MESES.indexOf(mesStr.toLowerCase()) + 1).padStart(2, "0");
  return `${anoStr}-${mes}`; // ex.: "2024-04"
};

const cursosOrdenados = [...cursos].sort((a, b) => key(b.periodo).localeCompare(key(a.periodo)));

const About = () => {

    const [expandido, setExpandido] = useState(false);
    const LIMITE_INICIAL = 10;

    const listaCursos = expandido ? cursosOrdenados : cursosOrdenados.slice(0, LIMITE_INICIAL);
    const temMaisQueLimite = cursosOrdenados.length > LIMITE_INICIAL;

    return (
        <Container>            
            <section className="mt-30 grid gap-10 grid-cols-1 sm:grid-cols-2">
                <h1 className="text-4xl w-full font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                    Olá, eu sou o
                    <br />
                    Jhonatan Neris
                </h1>
                <p>
                    Sou desenvolvedor full-stack, formado em Análise e Desenvolvimento de Sistemas pela Universidade UDF e em Gestão Pública pela Universidade Unyleya. Tenho paixão por aprendizado contínuo e estou sempre me desafiando por meio de cursos e projetos práticos que aplicam e validam meu conhecimento, além de compartilhar essas experiências com a comunidade Dev.
                    <br />
                    <br />
                    Atualmente, trabalho na empresa familiar MangDog, onde tive a oportunidade de vivenciar de perto a rotina do comércio, desenvolvendo habilidades em atendimento ao cliente, gestão de equipe e treinamento de colaboradores. Essa experiência me proporcionou maturidade profissional, organização e resiliência, competências que levo também para a área de tecnologia.
                    <br />
                    <br />
                    Meu objetivo agora é consolidar minha carreira como desenvolvedor, aplicando minhas habilidades técnicas em front-end e back-end (React, Next.js, Node.js, TypeScript) e crescendo dentro da área de tecnologia.
                    <br />
                    <br />
                    Te convido a conhecer meus projetos no GitHub, que demonstram meu empenho em transformar teoria em prática.
                </p>
            </section>
            <section className="mt-20 flex flex-col gap-10">
                <div>
                    <h2 className="text-4xl w-full font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-5">
                        Formações
                    </h2>
                    <div className="grid-cols-1 sm:grid-cols-2 grid gap-5">
                        {formacoes.map((formacao, index) => (
                            <EducationCard key={index} {...formacao} />
                        ))}

                    </div>
                </div>
                <div>
                    <h2 className="text-4xl w-full font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-5">
                        Cursos
                    </h2>

                    <div className="grid-cols-1 sm:grid-cols-2 grid gap-5">
                        {listaCursos.map((curso, index) => (
                            <EducationCard key={index} {...curso} />
                        ))}

                    </div>

                    {temMaisQueLimite && (
                        <div className="mt-6 flex justify-center">
                            <button
                                type="button"
                                onClick={() => setExpandido((v) => !v)}
                                aria-expanded={expandido}
                                className="px-6 py-2 rounded-md font-semibold 
                           bg-gradient-to-r from-blue-500 to-blue-800 
                           text-white hover:to-blue-400 active:scale-[0.98] 
                           transition"
                            >
                                {expandido ? "Ver menos" : `Ver mais (${cursos.length - LIMITE_INICIAL} restantes)`}
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </Container>
    )
}

export default About