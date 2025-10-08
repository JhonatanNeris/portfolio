import React from 'react'
import Image from 'next/image'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <section className='flex mt-30 flex-col sm:flex-row justify-between items-center gap-10'>
            <div className='flex flex-col gap-5'>
                {/* <h1 className='text-6xl font-bold mb-4'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Olá, eu sou o <br />
                        Jhonatan Neris, <br />
                    </span>
                    desenvolvedor  <br />
                    Full-stack
                </h1> */}
                
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
                <p className='text-lg'>
                    Transforme ideias em soluções completas, criando experiências digitais impactantes.
                </p>
                <div>
                    <Button name="Baixar CV" />
                </div>

            </div>
            <div>
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