"use client";

import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    staggerChildren?: number;
}

export function ScrollReveal({
    children,
    width = "100%",
    className,
    delay = 0,
    staggerChildren = 0,
    ...props
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const variants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: delay,
                staggerChildren: staggerChildren
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            style={{ width }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export const revealChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};
