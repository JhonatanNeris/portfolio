import React from 'react'
import Container from '../Container/Container'

const Footer = () => {
  return (
    <footer>
        <Container>
            <div className='w-full h-20 flex justify-center items-center border-t mt-10'>
                <p className='text-sm'>&copy; 2025 Jhonatan Neris. Todos os direitos reservados.</p>
            </div>
        </Container>

    </footer>
  )
}

export default Footer