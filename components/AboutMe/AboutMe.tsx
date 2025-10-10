import Reveal from "../Reveal/Reveal"

const AboutMe = () => {
    return (
        <section className='mt-20'>
            <Reveal delay={0.2}><h2 className='text-4xl font-[700] mb-4'>Sobre mim</h2></Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-15">
                <div className="w-[200px] h-[200px] bg-blue-600 rounded-2xl">

                </div>
                <div>
                    <p>
                        Sou desenvolvedor full-stack, formado em Análise e Desenvolvimento de Sistemas pela Universidade UDF e em Gestão Pública pela Universidade Unyleya. Tenho paixão por aprendizado contínuo e estou sempre me desafiando por meio de cursos e projetos práticos que aplicam e validam meu conhecimento, além de compartilhar essas experiências com a comunidade Dev.
                    </p>
                    <br />
                    <p>
                        Atualmente, trabalho na empresa familiar MangDog, onde tive a oportunidade de vivenciar de perto a rotina do comércio, desenvolvendo habilidades em atendimento ao cliente, gestão de equipe e treinamento de colaboradores. Essa experiência me proporcionou maturidade profissional, organização e resiliência, competências que levo também para a área de tecnologia.
                    </p>
                    <br />
                    <p>
                        Meu objetivo agora é consolidar minha carreira como desenvolvedor, aplicando minhas habilidades técnicas em front-end e back-end (React, Next.js, Node.js, TypeScript) e crescendo dentro da área de tecnologia.
                    </p>
                    <br />
                    <p>
                        Vamos trabalhar juntos!
                    </p>

                </div>
            </div>

        </section>


        // <svg viewBox="0 0 128 128">
        // <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
        // </svg>


    )
}

export default AboutMe