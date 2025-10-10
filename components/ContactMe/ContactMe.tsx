import React from 'react'
import Reveal from '../Reveal/Reveal'
import Button from '../Button/Button'
import SocialLinks from '../SocialLinks/SocialLinks'

const ContactMe = () => {
    return (
        <section className='my-40 flex w-[80%] mx-auto'>
            <Reveal delay={0.2}>
                <h2 className='text-5xl sm:text-6xl font-[700]'>
                    Transforme ideias em soluções completas, criando experiências digitais impactantes.
                </h2>
                <div className='flex mt-10 flex-col items-center'>
                    <div>
                        <Button name='Vamos conversar' />
                    </div>
                    <div className='mt-5'>
                        <SocialLinks/>

                    </div>
                </div>
            </Reveal>




        </section>
    )
}

export default ContactMe