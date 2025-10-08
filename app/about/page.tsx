import Container from "../../components/Container/Container"

const about = () => {
    return (
        <Container>
            <section className="mt-30 grid gap-10 grid-cols-2">
                    <h1 className="text-6xl w-full font-extrabold">
                        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                            Olá, eu sou o
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                            Jhonatan Neris,
                        </span>
                        <br />
                        desenvolvedor
                        <br />
                        Full-stack
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
            <section className="mt-20 grid-cols-2 grid gap-10">
                <div>
                    <h2>
                        Formações
                    </h2>

                </div>
                <div>

                </div>

            </section>
        </Container>
    )
}

export default about