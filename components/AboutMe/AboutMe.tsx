import Reveal from "../Reveal/Reveal"
import Image from 'next/image'

const AboutMe = () => {
    return (
        <section id="sobre" className='mt-20'>
            <Reveal delay={0.2}><h2 className='text-4xl font-[700] mb-4'>Sobre mim</h2></Reveal>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 mt-20">
                {/* Texto Principal */}
                <div className="col-span-1 md:col-span-3 row-span-1 bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col justify-center shadow-lg hover:border-white/10 transition-colors">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Sou desenvolvedor full-stack, com paixão por criar experiências digitais premium. 
                        Trago para a tecnologia uma bagagem sólida em gestão e atendimento, o que me permite conectar 
                        soluções técnicas às reais necessidades do negócio.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4">
                        Meu foco principal é entregar interfaces modernas (Front-end) e serviços robustos (Back-end), 
                        construindo produtos que os usuários amam e as empresas confiam.
                    </p>
                </div>
                
                {/* Foto */}
                <div className="col-span-1 md:col-span-1 row-span-1 md:row-span-2 min-h-[300px] bg-[#111] rounded-3xl overflow-hidden relative border border-white/5 group">
                    <Image
                        src="/minhafoto.jpg"
                        alt="Foto Jhonatan Neris"
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"    
                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                        <span className="text-white font-[600] text-xl whitespace-nowrap">Brasília, BR</span>
                    </div>
                </div>

                {/* Caixa Secundária */}
                <div className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/20 rounded-3xl p-8 flex flex-col justify-center items-center hover:border-blue-500/40 transition-colors">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 mb-2">
                        Pronto para o próximo nível
                    </h3>
                    <p className="text-gray-400 text-center">Vamos transformar sua ideia em uma aplicação incrível.</p>
                </div>
                
                <div className="col-span-1 md:col-span-1 row-span-1 bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center hover:border-white/10 transition-colors">
                    <span className="text-4xl font-extrabold text-white mb-1">+2</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider text-center font-semibold">Anos de<br/>Experiência</span>
                </div>
            </div>

        </section>





    )
}

export default AboutMe