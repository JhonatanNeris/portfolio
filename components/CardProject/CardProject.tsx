import Link from "next/link";
import Button from "../Button/Button";
import Chip from "../Chip/Chip";
import Image from "next/image";
import { Button as ButtonShadcn } from "../ui/button";

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
        <div className='flex flex-col md:flex-row gap-6'>
            <div className='md:min-w-[550px] md:max-w-[550px] w-full h-[220px] md:h-[300px] rounded-[12px] overflow-hidden'>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={600}
                    quality={100}
                    className='w-full h-full object-cover '
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