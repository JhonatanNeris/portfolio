import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="max-w-[1200px] mx-auto p-4 relative">
            {children}
        </div>
    )
}

export default Container