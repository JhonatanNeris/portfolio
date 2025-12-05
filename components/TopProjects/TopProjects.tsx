import React from 'react'
import CardProject from '../CardProject/CardProject'
import Reveal from '../Reveal/Reveal';

type Project = {
    title: string;
    description: string;        
    image: string;
    tags: string[];
    githubLink?: string;
    liveLink?: string;
}

const projectsArray: Project[] = [
    {
        title: 'Sistema Bruto', 
        description: 'Saas de gestão de pedidos para lanchonetes e restaurantes. Meu projeto mais completo até hoje, com painel administrativo, controle de estoque, múltiplos usuários, sistema de pedidos, cardápio digital, relatórios e muito mais.',
        image: '/bruto-caixa.png',
        tags: ['React', 'TypeScript', 'Node.js', "Express","MongoDB"],
        githubLink: '',
        liveLink: 'https://sistema-bruto.com'
    },
    {
        title: 'FSW - Barber', 
        description: 'Saas de gestão de pedidos para lanchonetes e restaurantes. Meu projeto mais completo até hoje, com painel administrativo, controle de estoque, múltiplos usuários, sistema de pedidos, cardápio digital, relatórios e muito mais.',
        image: '/bruto-caixa.png',
        tags: ['React', 'TypeScript', 'Node.js', "Express","MongoDB"],
        githubLink: 'https://github.com/JhonatanNeris/barber-app',
        liveLink: 'https://barber-app-seven-sandy.vercel.app/'
    },
    {
        title: 'Space App', 
        description: 'Galeria de fotos do espaço.',
        image: '/space-app.png',
        tags: ['React', 'TypeScript', 'Styled components'],
        githubLink: '',
        liveLink: 'https://sistema-bruto.com'
    },
    {
        title: 'Landing Page - Cátia Damasceno', 
        description: 'Projeto que fiz durante processo seletivo, uma landing page responsiva e moderna. Projeto conta com SEO otimizado e boas práticas de acessibilidade. Implementacão feita com Next.js e Tailwind CSS, layout totalmente responsivo.',
        image: '/catia.png',
        tags: ['Next Js', 'TypeScript', "Tailwind CSS", "React", "CSS"],
        githubLink: '',
        liveLink: 'https://wdc-frontend-ashen.vercel.app/'
    },
    {
        title: 'Landing Page - Starbucks', 
        description: 'Projeto pessoal de uma landing page da Starbucks, inspirado no design original. Implementacão feita com HTML5 e CSS, layout não responsivo.',
        image: '/starbucks.png',
        tags: ['HTML5', "CSS", "JavaScript"],
        githubLink: '',
        liveLink: 'https://wdc-frontend-ashen.vercel.app/'
    },
]

const TopProjects = () => {
    return (
        <section className='mt-20'>
            <Reveal delay={0.2}><h2 className='text-4xl font-[700] mb-4'>Projetos populares</h2></Reveal>
            <p>
                Selecionei alguns dos meus melhores projetos para te encantar...
            </p>
            <div className='flex flex-col gap-12 mt-20'>
                {projectsArray.map((project, index) => (
                    <CardProject key={index} {...project} />
                ))}

            </div>
        </section>

    )
}

export default TopProjects