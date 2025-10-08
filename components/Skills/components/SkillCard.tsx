import Image from 'next/image'


type Props = {
    skillName: string;
    svg: string;
}

const SkillCard = ({ skillName, svg }: Props) => {
    return (
        <div className='group bg-[#1c1c22] rounded-[12px] p-6 font-[500] duration-500 hover:scale-110 hover:bg-[#25252c] transition-transform flex flex-col justify-center items-center gap-2 border-[0.5px] border-white/20'>
            <Image
                src={svg}
                alt={skillName}
                width={90}
                height={80}
                className="mb-2 duration-500 group-hover:scale-125"
            />
            <h3>
                {skillName}
            </h3>
        </div>
    )
}

export default SkillCard