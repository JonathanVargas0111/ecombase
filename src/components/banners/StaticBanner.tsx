import Image from "next/image";
import Link from "next/link";

type Slide = {
    image: string;
    link: string;
    text: string;
};

type StaticBannerProps = {
    slide: Slide;
};

const StaticBanner = ({ slide }: StaticBannerProps) => {
    return (
        <>
            <div className="w-full h-[500px] text-white flex items-center justify-center">
                <Image
                    src={slide.image}
                    alt="static-banner"
                    className="w-full h-full object-cover opacity-70"
                    width={500}
                    height={500}
                />
                <div className="absolute w-full px-6 md:px-28 text-xl text-black flex flex-col gap-2">
                    <p className="text-7xl font-bold">{slide.text}</p>
                    <Link
                        href={slide.link}
                        className="w-32 text-white bg-gray-800 rounded-xl p-2 text-center"
                    >Shop now</Link>
                </div>
            </div>

        </>
    );
};

export default StaticBanner;
