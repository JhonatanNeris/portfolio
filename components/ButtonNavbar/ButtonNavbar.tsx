import Link from 'next/link'

type ButtonNavbarProps = {
    href: string;
    name: string;
}
const ButtonNavbar = ({ href, name }: ButtonNavbarProps) => {
    return (
        <Link href={href} className='hover:bg-[#1f1f1f] px-4 py-1 rounded-full transition-colors border-[0.5px] border-white/20'>
            {name}
        </Link>
    )
}

export default ButtonNavbar