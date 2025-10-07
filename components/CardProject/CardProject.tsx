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
        <div className='flex flex-col md:flex-row gap-6'>
            <div className='min-w-[550px] w-[550px] h-[300px] bg-gray-400 rounded-[12px]'>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={600}
                    quality={100}
                    className='max-w-[100%] h-full object-cover rounded-[12px]'
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
                <div className="mt-3">
                    <Button name="Ver projeto" />
                </div>
            </div>
        </div>
    )
}

export default CardProject