"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type BannerProps = {
    img: StaticImageData;
    alt: string;
    width?: number;
    height?: number;
    to: string;
};

function Banner({ img, alt, to, width, height }: BannerProps) {
    return (
        <div>
            <Link href={to}>
                <Image src={img} alt={alt} width={width} height={height} />
            </Link>
        </div>
    );
}

export default Banner;
