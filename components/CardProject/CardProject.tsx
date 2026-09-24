import Link from "next/link";
import Button from "../Button/Button";
import Chip from "../Chip/Chip";
import Image from "next/image";


type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubLink?: string;
    liveLink?: string;
}


const CardProject = (project: Project) => {
    return (
        <div className='flex flex-col md:flex-row gap-8 bg-[#111]/80 backdrop-blur-xl p-6 rounded-3xl border border-white/5 relative group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)] hover:border-white/10'>
            <div className='md:min-w-[550px] md:max-w-[550px] w-full h-[220px] md:h-[320px] rounded-2xl overflow-hidden relative border border-white/5 shadow-2xl'>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={600}
                    quality={100}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                />

            </div>
            <div className="flex flex-col justify-between">
                <div>
                    <h3 className='text-2xl font-[600] mt-2'>{project.title}</h3>
                    <p className='mt-2 text-justify'>{project.description}</p>
                    {project.tags && project.tags.length > 0 && (
                        <div className='flex flex-wrap gap-2 mt-3'>
                            {project.tags.map((tag, index) => (
                                <Chip key={index} label={tag} />
                            ))}
                        </div>
                    )}
                </div>
                {/* BOTÕES */}
                <div className="mt-4 flex gap-2">
                    {/* Ver Projeto */}
                    {project.liveLink && (
                        <Button
                            name="Ver projeto"
                            href={project.liveLink}
                            target="_blank"
                        />
                    )}

                    {/* Ver Código */}
                    {project.githubLink && (
                        <Button
                            name="Ver código"
                            variant="outline"
                            href={project.githubLink}
                            target="_blank"
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardProject