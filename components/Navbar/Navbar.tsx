import { MenuIcon } from "lucide-react"
import ButtonNavbar from "../ButtonNavbar/ButtonNavbar"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[800px] z-50">
            <nav className="flex items-center justify-between border-[0.5px] border-white/10 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-8">
                    <span className="text-2xl font-[700] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800">JN</span>
                    <ul className="gap-4 hidden md:flex">
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
                <div className="hidden md:block">
                    <button className='bg-white text-black cursor-pointer px-5 py-2 rounded-full hover:bg-gray-200 transition-colors font-[600] text-sm'>
                        Entre em contato
                    </button>
                </div>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                                {/* <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription> */}

                                <div className="flex flex-col gap-2 border-b border-solid py-5">
                                    <SheetClose asChild>
                                        <Button className="justify-start gap-2" variant="ghost" asChild>
                                            <Link href="/">
                                                Início
                                            </Link>
                                        </Button>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Button className="justify-start gap-2" variant="ghost" asChild>
                                            <Link href="/about">
                                                Sobre
                                            </Link>
                                        </Button>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Button className="justify-start gap-2" variant="ghost" asChild>
                                            <Link href="/projects">
                                                Projetos
                                            </Link>
                                        </Button>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Button className="justify-start gap-2" variant="ghost" asChild>
                                            <Link href="/contact">
                                                Contato
                                            </Link>
                                        </Button>
                                    </SheetClose>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-solid py-5">
                                    <SheetClose asChild>
                                        <Button className="justify-start gap-2" asChild>
                                            <Link href="/">
                                                Entre em contato
                                            </Link>
                                        </Button>
                                    </SheetClose>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>

            </nav>

            {/* <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SidebarSheet />
            </Sheet> */}


        </div>
    )
}

export default Navbar