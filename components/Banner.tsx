"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type BannerProps = {
    img: StaticImageData;
    alt: string;
    to: string;
    type: string;
};

function Banner({ img, alt, to, type }: BannerProps) {
    return (
        <div>
            {type === "link" ? (
                <Link href={to} replace>
                    <Image src={img} alt={alt} />
                </Link>
            ) : (
                <a href={to}>
                    <Image src={img} alt={alt} />
                </a>
            )}
        </div>
    );
}

export default Banner;
