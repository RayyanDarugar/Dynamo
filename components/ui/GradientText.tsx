import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    as?: React.ElementType;
}

export function GradientText({
    as: Component = "span",
    className,
    children,
    ...props
}: GradientTextProps) {
    return (
        <Component
            className={cn(
                "bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
