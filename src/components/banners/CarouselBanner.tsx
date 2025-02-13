'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

type Slide = {
    image: string;
    link: string;
};

type CarouselBannerProps = {
    slides: Slide[];
};

const CarouselBanner = ({ slides }: CarouselBannerProps) => {
    return (

        <Carousel
            className="w-full max-w-screen-2xl mx-auto"
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={index} className="w-full h-[500px] text-white flex items-center justify-center">
                        <Link href={slide.link} className="w-full h-full">
                            <Image
                                src={slide.image}
                                alt="static-banner"
                                className="w-full h-full object-cover"
                                width={500}
                                height={500}
                            />
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="hidden xl:block">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    );
};

export default CarouselBanner;
