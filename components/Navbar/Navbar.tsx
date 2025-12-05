import { MenuIcon } from "lucide-react"
import ButtonNavbar from "../ButtonNavbar/ButtonNavbar"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="fixed top-4 right-0 left-0 z-10 mx-2">
            <nav className="flex justify-between border-[0.5px] border-white/20 p-3 rounded-xl itens-center max-w-[1200px] mx-auto bg-[#0a0a0a] z-10">
                <div className="flex items-center gap-6">
                    <span className="text-2xl font-[700]">JN</span>
                    <ul className="gap-3 hidden md:flex">
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
                    <button className='bg-white text-black cursor-pointer px-4 py-1 rounded-xl hover:bg-gray-200 transition-colors font-[500]'>
                        Entre em contato
                    </button>
                </div>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Button size="icon" variant="outline">
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