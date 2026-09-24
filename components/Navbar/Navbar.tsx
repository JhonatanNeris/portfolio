"use client"

import { MenuIcon } from "lucide-react"
import ButtonNavbar from "../ButtonNavbar/ButtonNavbar"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"

const WPP_LINK = "https://wa.me/5561991448488?text=Ol%C3%A1%20Jhonatan%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!"

const Navbar = () => {
    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[800px] z-50">
            <nav className="flex items-center justify-between border-[0.5px] border-white/10 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-8">
                    <a href="#inicio" className="text-2xl font-[700] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800">JN</a>
                    <ul className="gap-4 hidden md:flex">
                        <li>
                            <ButtonNavbar href="#inicio" name="Início" />
                        </li>
                        <li>
                            <ButtonNavbar href="#projetos" name="Projetos" />
                        </li>
                        <li>
                            <ButtonNavbar href="#sobre" name="Sobre" />
                        </li>
                        <li>
                            <ButtonNavbar href="#habilidades" name="Habilidades" />
                        </li>
                        <li>
                            <ButtonNavbar href="#contato" name="Contato" />
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <a
                        href={WPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='bg-white text-black cursor-pointer px-5 py-2 rounded-full hover:bg-gray-200 transition-colors font-[600] text-sm'
                    >
                        Entre em contato
                    </a>
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

                                <div className="flex flex-col gap-2 border-b border-solid py-5">
                                    <SheetClose asChild>
                                        <a href="#inicio" className="inline-flex items-center justify-start gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                                            Início
                                        </a>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <a href="#projetos" className="inline-flex items-center justify-start gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                                            Projetos
                                        </a>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <a href="#sobre" className="inline-flex items-center justify-start gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                                            Sobre
                                        </a>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <a href="#habilidades" className="inline-flex items-center justify-start gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                                            Habilidades
                                        </a>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <a href="#contato" className="inline-flex items-center justify-start gap-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                                            Contato
                                        </a>
                                    </SheetClose>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-solid py-5">
                                    <SheetClose asChild>
                                        <a
                                            href={WPP_LINK}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                        >
                                            Entre em contato
                                        </a>
                                    </SheetClose>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </div>
    )
}

export default Navbar