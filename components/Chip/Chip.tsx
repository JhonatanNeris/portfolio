type ChipProps = {
    label?: string;
}
const Chip = ({label}: ChipProps) => {
  return (
    <div>
        <span className='bg-white/10 text-white px-3 py-1 rounded-full text-sm font-[500]'>
            {label}
        </span>
    </div>
  )
}

export default Chip