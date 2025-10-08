import ButtonNavbar from "../ButtonNavbar/ButtonNavbar"

const Navbar = () => {
    return (
        <div className="fixed top-4 right-0 left-0 z-10">
            <nav className="flex justify-between border-[0.5px] border-white/20 p-3 rounded-xl itens-center max-w-[1200px] mx-auto bg-[#0a0a0a] z-10">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-[700]">JN</span>
                    <ul className="flex gap-3">
                        <li>
                            <ButtonNavbar href="/" name="Home" />
                        </li>
                        <li>
                            <ButtonNavbar href="/about" name="Sobre" />
                        </li>
                        <li>
                            <ButtonNavbar href="/projects" name="Projetos" />
                        </li>
                        <li>
                            <ButtonNavbar href="/contact" name="Contato" />
                        </li>
                    </ul>
                </div>
                <div>
                    <button className='bg-white text-black cursor-pointer px-4 py-1 rounded-xl hover:bg-gray-200 transition-colors font-[500]'>
                        Entre em contato
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar