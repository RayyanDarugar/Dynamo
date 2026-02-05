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

    let src = "/brand/colordynamo.svg";

    if (variant === "white") {
        src = "/brand/whitedynamo.svg";
    } else if (variant === "black") {
        src = "/brand/dynamologo.svg"; // Assuming this is the black one based on size difference
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
