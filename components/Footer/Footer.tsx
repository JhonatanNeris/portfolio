import React from 'react'
import Container from '../Container/Container'
import SocialLinks from '../SocialLinks/SocialLinks'

const Footer = () => {
  return (
    <footer>
        <Container>
            <div className='w-full py-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t mt-10'>
                <p className='text-sm text-gray-400'>&copy; {new Date().getFullYear()} Jhonatan Neris. Todos os direitos reservados.</p>
                <SocialLinks size={20} />
            </div>
        </Container>
    </footer>
  )
}

export default Footer