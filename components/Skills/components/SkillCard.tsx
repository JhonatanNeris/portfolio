import Image from 'next/image'


type Props = {
    skillName: string;
    svg: string;
}

const SkillCard = ({ skillName, svg }: Props) => {
    return (
        <div className='group bg-[#1c1c22] rounded-[12px] p-6 font-[500] duration-500 hover:scale-110 hover:bg-[#25252c] transition-transform flex flex-col justify-center items-center gap-2 border-[0.5px] border-white/20 shadow-xl shadow-white/15'>
            <Image
                src={svg}
                alt={skillName}
                width={120}
                height={120}
                style={{ width: 'auto', height: 'auto' }}
                className="mb-2 duration-500 group-hover:scale-125 min-w-[50px] min-h-[50px]"
            />
            <h3>
                {skillName}
            </h3>
        </div>
    )
}

export default SkillCard