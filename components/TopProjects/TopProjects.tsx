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
        description: 'SaaS corporativo focado na gestão completa de pedidos para lanchonetes e restaurantes. É uma solução B2B robusta que centraliza múltiplos usuários, controle eficiente de fluxo de caixa, estoque automatizado, e geração de cardápios digitais interativos.',
        image: '/bruto-caixa-4.png',
        tags: ['React', 'TypeScript', 'Node.js', "Express", "MongoDB"],
        githubLink: '',
        liveLink: 'https://sistema-bruto.com'
    },
    {
        title: 'FSW - Barber', 
        description: 'Plataforma inteligente de agendamento online para barbearias. Desenvolvida para otimizar o tempo dos profissionais com um painel administrativo integrado, enquanto proporciona uma experiência fluida para os clientes marcarem horários 24/7.',
        image: '/bruto-caixa.png',
        tags: ['Next Js', 'React', 'TypeScript', 'Prisma', "PostgreSQL"],
        githubLink: 'https://github.com/JhonatanNeris/barber-app',
        liveLink: 'https://barber-app-seven-sandy.vercel.app/'
    },
    {
        title: 'Space App', 
        description: 'Aplicação imersiva no formato de galeria, que consome APIs modernas para exibir astrofotografias do espaço sideral com alto desempenho e componentes flexíveis e dinâmicos.',
        image: '/space-app.png',
        tags: ['React', 'TypeScript', 'Styled components'],
        githubLink: '',
        liveLink: ''
    },
    {
        title: 'Landing Page - Cátia Damasceno', 
        description: 'Página de alta conversão desenvolvida para lançamento digital. Arquitetura otimizada para SEO agressivo, carregamento ultrarrápido e extrema atenção às heurísticas de acessibilidade e layout responsivo.',
        image: '/catia.png',
        tags: ['Next Js', 'TypeScript', "Tailwind CSS", "React"],
        githubLink: '',
        liveLink: 'https://wdc-frontend-ashen.vercel.app/'
    },
    {
        title: 'Landing Page - Starbucks', 
        description: 'Recriação conceitual da Landing Page da Starbucks focando no design e detalhes originais da UI/UX. Projeto desenvolvido sem frameworks como desafio técnico de layout estático.',
        image: '/starbucks.png',
        tags: ['HTML5', "CSS3", "JavaScript"],
        githubLink: '',
        liveLink: 'https://wdc-frontend-ashen.vercel.app/'
    },
]

const TopProjects = () => {
    return (
        <section id="projetos" className='mt-20'>
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