import Image from "next/image";

interface LogoProps {
    variant?: "color" | "white" | "black";
    className?: string;
    width?: number;
    height?: number;
}

export function Logo({ variant = "color", className, width = 140, height = 40 }: LogoProps) {
    // Map variants to files
    // color -> colordynamo.svg (or dynamologo.svg, need to verify)
    // white -> whitedynamo.svg
    // black -> dynamologo.svg (if it is black) or we use CSS filter

    // Based on file analysis, I will determine the paths.
    // For now I'm writing the structure.

    // Base path helper
    const basePath = "/Dynamo";

    let src = `${basePath}/brand/colordynamo.svg`;

    if (variant === "white") {
        src = `${basePath}/brand/whitedynamo.svg`;
    } else if (variant === "black") {
        src = `${basePath}/brand/dynamologo.svg`;
    }

    return (
        <Image
            src={src}
            alt="Agent Dynamo"
            width={width}
            height={height}
            className={className}
            priority
        />
    );
}
