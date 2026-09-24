import React from 'react'
import Reveal from '../Reveal/Reveal'
import Button from '../Button/Button'
import SocialLinks from '../SocialLinks/SocialLinks'

const WPP_LINK = "https://wa.me/5561991448488?text=Ol%C3%A1%20Jhonatan%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!"

const ContactMe = () => {
    return (
        <section id="contato" className='my-40 flex w-[80%] mx-auto'>
            <Reveal delay={0.2}>
                <h2 className='text-4xl sm:text-6xl font-[700]'>
                    Transforme ideias em soluções completas, criando experiências digitais impactantes.
                </h2>
                <div className='flex mt-10 flex-col items-center gap-4'>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Button name='Vamos conversar' href={WPP_LINK} target="_blank" />
                        <Button name='Enviar e-mail' variant="outline" href="mailto:jhonatansnx@gmail.com" target="_self" />
                    </div>
                    <div className='mt-3'>
                        <SocialLinks />
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default ContactMe