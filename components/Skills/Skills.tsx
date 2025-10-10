import React from 'react'
import SkillCard from './components/SkillCard'

type Skill = {
    skillName: string;
    svg: string;
}

const skillsArray: Skill[] = [
    {
        skillName: 'React',
        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    },
    {
        skillName: 'Next.js',
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    },
    {
        skillName: 'TypeScript',
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    },
    {
        skillName: 'JavaScript',
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
        skillName: 'Node.js',
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
    },
    {
        skillName: 'HTML5',
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
        skillName: 'CSS3',
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
    {
        skillName: 'MongoDB',
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    },
    {
        skillName: 'MySQL',
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
    },
    {
        skillName: 'C#',
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
    },
    {
        skillName: 'Tailwind CSS',
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        skillName: 'Git',
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
]

const Skills = () => {
    return (
        <section className='mt-20'>
            <h2 className='text-4xl font-[700] mb-4'>Habilidades</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-20'>
                {skillsArray.length > 0 && skillsArray.map((skill, index) => (
                    <SkillCard key={index} skillName={skill.skillName} svg={skill.svg} />
                ))}


            </div>

        </section>
    )
}

export default Skills