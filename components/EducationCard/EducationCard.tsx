type EducationCardProps = {
    curso: string;
    instituicao: string;
    periodo: string;
}


const EducationCard = ({ instituicao, curso, periodo }: EducationCardProps) => {
    return (
        <div className='border-b flex flex-col gap-1 py-3'>
            <div>
                <h3 className="font-bold">{curso}</h3>
            </div>
            <div className="flex justify-between text-gray-500">
                <p>{instituicao}</p>
                <p>{periodo}</p>
            </div>

        </div>
    )
}

export default EducationCard