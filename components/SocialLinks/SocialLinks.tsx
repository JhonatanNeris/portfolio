// components/SocialLinks.tsx
"use client";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

type IconType = React.ComponentType<{ size?: number; className?: string }>;

export type SocialItem = {
    label: string;     // ex: "LinkedIn"
    href: string;      // url
    icon: IconType;    // ícone (lucide, react-icons, svg próprio...)
};

type Props = {
    items?: SocialItem[];
    size?: number;                 // tamanho do ícone (px)
    gap?: string;                  // gap tailwind (ex: "gap-4")
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    variant?: "ghost" | "solid" | "outline";
    className?: string;            // estilização externa
    openInNewTab?: boolean;
    ariaLabel?: string;            // rótulo do grupo p/ acessibilidade
};

const variants = {
    ghost: "bg-transparent hover:scale-130 hover:bg-black/5 dark:hover:bg-white/10",
    solid: "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black",
    outline:
        "ring-1 ring-black/15 hover:ring-black/30 dark:ring-white/15 dark:hover:ring-white/30",
};

export default function SocialLinks({
    items = [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/jhonatan-neris", icon: Linkedin },
        { label: "GitHub", href: "https://github.com/JhonatanNeris", icon: Github },
        // { label: "E-mail", href: "#", icon: Mail },
    ],
    size = 26,
    gap = "gap-4",
    rounded = "md",
    variant = "ghost",
    className,
    openInNewTab = true,
    ariaLabel = "Redes sociais",
}: Props) {
    const shape =
        rounded === "full"
            ? "rounded-full"
            : rounded === "lg"
                ? "rounded-xl"
                : rounded === "md"
                    ? "rounded-lg"
                    : rounded === "sm"
                        ? "rounded-md"
                        : "rounded-none";

    const baseBtn = "inline-flex h-10 w-10 items-center justify-center transition-transform duration-250 active:scale-95 hover:scale-155";

    return (
        <nav aria-label={ariaLabel} className={`flex items-center", ${gap}, ${className}`}>
            {items.map(({ label, href, icon: Icon }) => {
                const isExternal = /^https?:\/\//.test(href) || openInNewTab;
                const Comp = isExternal ? "a" : Link;

                return (
                    <Comp
                        key={label}
                        {...(isExternal
                            ? { href, target: "_blank", rel: "noopener noreferrer" }
                            : { href })}
                        aria-label={label}
                        className={`${baseBtn}, ${variants[variant]}, ${shape}`}
                        title={label}
                    >
                        <Icon size={size} />
                    </Comp>
                );
            })}
        </nav>
    );
}
