"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type BannerProps = {
    img: StaticImageData;
    alt: string;
    to: string;
};

function Banner({ img, alt, to }: BannerProps) {
    return (
        <div>
            <Link href={to}>
                <Image src={img} alt={alt} />
            </Link>
        </div>
    );
}

export default Banner;
