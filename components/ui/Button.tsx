"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = {
    primary: "bg-brand-blue text-white hover:brightness-110 shadow-lg shadow-brand-blue/20",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-brand-blue/30 hover:bg-slate-50",
    outline: "border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-400",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
};

const buttonSizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
};

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: keyof typeof buttonVariants;
    size?: keyof typeof buttonSizes;
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 disabled:pointer-events-none disabled:opacity-50",
                    buttonVariants[variant],
                    buttonSizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
