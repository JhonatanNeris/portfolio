import Reveal from "../Reveal/Reveal"
import Image from 'next/image'

const AboutMe = () => {
    return (
        <section className='mt-20'>
            <Reveal delay={0.2}><h2 className='text-4xl font-[700] mb-4'>Sobre mim</h2></Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                <div className="flex justify-center items-center">
                    <div className="w-[280px] h-[280px] bg-blue-600 rounded-2xl overflow-hidden ">
                        <Image
                            src="/minhafoto.jpg"
                            alt="Foto Jhonatan Neris"
                            width={500}
                            height={400}
                            className='object-cover w-full h-full'
                        />
                    </div>
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





    )
}

export default AboutMe