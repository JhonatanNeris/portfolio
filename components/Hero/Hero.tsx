import React from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import Reveal from '../Reveal/Reveal'

const Hero = () => {
    return (

        <section className='flex mt-20 sm:mt-30 flex-col sm:flex-row justify-between items-center gap-10'>
            <div className='flex flex-col gap-5 w-full'>
                {/* <h1 className='text-6xl font-bold mb-4'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Olá, eu sou o <br />
                        Jhonatan Neris, <br />
                    </span>
                    desenvolvedor  <br />
                    Full-stack
                </h1> */}
                <Reveal delay={0.2}>
                    <h1 className="sm:text-5xl text-4xl md:text-6xl font-extrabold">
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
                </Reveal>

                <p className='text-base sm:text-lg text-gray-200'>
                    Transforme ideias em soluções completas, criando experiências digitais impactantes.
                </p>
                <div>
                    <Button name="Baixar CV" />
                </div>

            </div>
            <div className='w-full flex justify-end'>
                <Image
                    src="/minhafoto.jpg"
                    alt="Hero Image"
                    width={450}
                    height={400}
                    className='rounded-[12px]'
                />

            </div>
        </section>
    )
}

export default Hero